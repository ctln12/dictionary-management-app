import React, { Component } from 'react';

class AddNewRow extends Component {
  constructor() {
    super();
    this.state = {
      domain: '',
      range: ''
    }
  }
  updateInput = (e) => {
    if (e.target.placeholder === 'domain') {
      this.setState({domain: e.target.value})
    } else {
      this.setState({range: e.target.value})
    }
  }

  addNewRow = (e) => {
    console.log(e);
    console.log(this.state.domain, this.state.range, this.props.dictionary.name);
    this.props.addNewRowFn(this.props.dictionary, this.state.domain, this.state.range);
    // this.setState({ newDictionaryName: '' });
  }

  render() {
    const { dictionary } = this.props;
    return (
      <div id={dictionary.name} className='NewEntry'>
        <p>Add new entry:</p>
        <input
          type='text'
          placeholder='domain'
          name={dictionary.name}
          value={this.state.domain}
          onChange={e => this.updateInput(e)}
        />
        <input
          type='text'
          placeholder='range'
          name={dictionary.name}
          value={this.state.range}
          onChange={e => this.updateInput(e)}
        />
        <button
          onClick={(e) => this.addNewRow(e)}
        >
          add new content
        </button>
      </div>
    );
  }
}
export default AddNewRow;
