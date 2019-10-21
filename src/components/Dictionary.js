import React, { Component } from 'react';
import AddNewRow from './AddNewRow';

class Dictionary extends Component {
  deleteDictionary = (e) => {
    this.props.deleteDictionaryFn(this.props.dictionary.id);
  }

  render() {
    const { dictionary } = this.props;
    return (
      <div key={dictionary.id} className='Dictionary'>
        <h3>
          {dictionary.name}
          <button onClick={(e) => this.deleteDictionary(e)}>x</button>
        </h3>
        <AddNewRow dictionary={dictionary} addNewRowFn={this.props.addNewRowFn} />
        <div className='Content'>
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
                  <td><button>x</button></td>
                  <td><button>edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Dictionary;
