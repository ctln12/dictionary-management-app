import React, { Component } from 'react';
import Row from './Row';

class DictionaryContent extends Component {
  render() {
    const { dictionary } = this.props;
    return (
      <div className='DictionaryContent'>
        <table className={dictionary.name}>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Range</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dictionary.content.map(row => (
              <Row
                dictionary={dictionary}
                row={row}
                deleteRowFn={this.props.deleteRowFn}
                editRowFn={this.props.editRowFn}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default DictionaryContent;
