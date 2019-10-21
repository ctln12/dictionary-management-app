import React, { Component } from 'react';

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
          <button
          onClick={(e) => {
            // this.updateId(dictionary.id);
            this.deleteDictionary(e)}}
          >
            x
          </button>
        </h3>
      </div>
    );
  }
}
export default Dictionary;
