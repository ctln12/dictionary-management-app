import React, { Component } from 'react';

class DictionaryContent extends Component {
  deleteRow = (e) => {
    this.props.deleteRowFn(this.props.dictionary, parseInt(e.target.id));
    console.log('deleted');
  }

  render() {
    const { dictionary } = this.props;
    return (
      <div className='DictionaryContent'>
        Hello from the DictionaryContent component!
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            {dictionary.content.map(row => (
              <tr>
                <td>{row.domain}</td>
                <td>{row.range}</td>
                <td><button id={row.id} onClick={e => this.deleteRow(e)}>x</button></td>
                <td><button>edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default DictionaryContent;
