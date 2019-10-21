import React, { Component } from 'react';
import Dictionary from './Dictionary';

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
        {
          dictionaries.map(dictionary => {
            return (
              <Dictionary dictionary={dictionary} deleteDictionaryFn={this.props.deleteDictionaryFn}/>
            )
          })
        }
      </div>
    );
  }
}
export default Dictionaries;
