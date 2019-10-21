import React, { Component } from 'react';

class CreateNewDictionary extends Component {
  constructor() {
    super();
    this.state = {
      newDictionaryName: ''
    }
  }

  updateDictionary = (e) => {
    this.setState({ newDictionaryName: e.target.value })
  }

  addDictionary = (e) => {
    this.props.addDictionaryFn(this.state.newDictionaryName);
    this.setState({ newDictionaryName: ''});
  }

  render() {
    return (
      <div className='Create-new-dictionary'>
        <p>Create a new dictionary:</p>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.newDictionaryName}
          onChange={e => this.updateDictionary(e)}
        />
        <button
          onClick={(e) => this.addDictionary(e)}
        >
          add
            </button>
        <hr />
      </div>
    );
  }
}
export default CreateNewDictionary;
