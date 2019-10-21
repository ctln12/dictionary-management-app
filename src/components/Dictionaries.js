import React, { Component } from 'react';

class Dictionaries extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     newDictionaryName: ''
  //   }
  // }

  // updateDictionary = (e) => {
  //   this.setState({ newDictionaryName: e.target.value })
  // }

  // deleteDictionary = (e) => {
  //   this.props.deleteDictionaryFn(this.state.newDictionaryName);
  // }

  render() {
    const { dictionaries } = this.props;
    return (
      <div className='Create-new-dictionary'>
        <h2>Dictionaries</h2>
        {dictionaries.map(dictionary => {
          return (
            <div key={dictionary.id} className='Dictionary'>
              <h3>
                {dictionary.name}
                <button
                  // onClick={() => this.deleteDictionary(dictionary.id)}
                >
                  x
                </button>
              </h3>
            </div>
          )})}

        {/* <p>Create a new dictionary:</p>
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
        <hr /> */}
      </div>
    );
  }
}
export default Dictionaries;
