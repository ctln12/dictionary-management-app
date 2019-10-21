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
          // onChange={e => this.props.updateDictionary('newDictionaryName', e.target.value)}
        />
        <button
          onClick={(e) => this.addDictionary(e)}
          // onClick={() => this.addDictionary()}
        >
          add
            </button>
        <hr />
      </div>
    );
  }
}
export default CreateNewDictionary;
