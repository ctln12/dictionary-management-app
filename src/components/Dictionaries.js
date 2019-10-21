import React, { Component } from 'react';
import Dictionary from './Dictionary';

class Dictionaries extends Component {
  render() {
    const { dictionaries } = this.props;
    return (
      <div className='Create-new-dictionary'>
        <h2>Dictionaries</h2>
        {
          dictionaries.map(dictionary => {
            return (
              <Dictionary
                dictionary={dictionary}
                deleteDictionaryFn={this.props.deleteDictionaryFn}
                addNewRowFn={this.props.addNewRowFn}
                deleteRowFn={this.props.deleteRowFn}
              />
            )
          })
        }
      </div>
    );
  }
}
export default Dictionaries;
