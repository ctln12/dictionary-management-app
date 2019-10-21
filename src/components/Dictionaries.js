import React, { Component } from 'react';
import Dictionary from './Dictionary';

class Dictionaries extends Component {
  render() {
    const { dictionaries } = this.props;
    return (
      <div className='Dictionaries'>
        <h2>Dictionaries</h2>
        {
          dictionaries.map(dictionary => {
            return (
              <Dictionary
                dictionaries={dictionaries}
                dictionary={dictionary}
                deleteDictionaryFn={this.props.deleteDictionaryFn}
                addNewRowFn={this.props.addNewRowFn}
                deleteRowFn={this.props.deleteRowFn}
                editRowFn={this.props.editRowFn}
              />
            )
          })
        }
      </div>
    );
  }
}
export default Dictionaries;
