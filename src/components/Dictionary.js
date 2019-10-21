import React, { Component } from 'react';
import AddNewRow from './AddNewRow';
import DictionaryContent from './DictionaryContent';

class Dictionary extends Component {
  deleteDictionary = (e) => {
    this.props.deleteDictionaryFn(this.props.dictionary.id);
  }

  render() {
    const { dictionaries, dictionary } = this.props;
    return (
      <div key={dictionary.id} className='Dictionary'>
        <h3>
          {dictionary.name}
            <i className="far fa-times-circle fa-fw" onClick={(e) => this.deleteDictionary(e)}></i>
        </h3>
        <DictionaryContent
          dictionary={dictionary}
          deleteRowFn={this.props.deleteRowFn}
          editRowFn={this.props.editRowFn}
        />
        <AddNewRow
          dictionaries={dictionaries}
          dictionary={dictionary}
          addNewRowFn={this.props.addNewRowFn}
        />
      </div>
    );
  }
}
export default Dictionary;
