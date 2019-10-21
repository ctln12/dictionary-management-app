import React, { Component } from 'react';
import AddNewRow from './AddNewRow';
import DictionaryContent from './DictionaryContent';

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
          <button onClick={(e) => this.deleteDictionary(e)}>
            x
          </button>
        </h3>
        <AddNewRow
          dictionary={dictionary}
          addNewRowFn={this.props.addNewRowFn}
        />
        <DictionaryContent
          dictionary={dictionary}
          deleteRowFn={this.props.deleteRowFn}
        />
      </div>
    );
  }
}
export default Dictionary;
