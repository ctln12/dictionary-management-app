import React, { Component } from 'react';

class AddNewRow extends Component {
  constructor() {
    super();
    this.state = {
      newDomain: '',
      newRange: ''
    }
  }
  updateInput = (e) => {
    const dictionary = this.props.dictionary;
      dictionary.content.forEach(row => {
        if (e.target.placeholder === 'newDomain') {
          if (e.target.value === row.domain) {
            if (e.target.value !== row.range) {
              alert('Duplicate / Fork!');
              e.target.value = '';
            }
          }
        }else {
          if (e.target.value !== this.state.newDomain) {
            if (!row.range.includes(e.target.value)) {
              if (this.state.newDomain === row.range) {
                alert('Cycle / Chain!');
                e.target.value = '';
              }
            }
          }
        }
      });
    if (e.target.placeholder === 'newDomain') {
      this.setState({newDomain: e.target.value});
    } else {
      this.setState({newRange: e.target.value})
    }
  }

  addNewRow = (e) => {
    this.props.addNewRowFn(this.props.dictionary, this.state.newDomain, this.state.newRange);

    // this.setState({
    //   newDomain: '',
    //   newRange: ''
    // });
  }

  render() {
    const { dictionary } = this.props;
    return (
      <div id={dictionary.name} className='NewEntry'>
        <p>Add new entry:</p>
        <input
          type='text'
          placeholder='newDomain'
          name={dictionary.name}
          value={this.state.domain}
          onChange={e => this.updateInput(e)}
        />
        <input
          type='text'
          placeholder='newRange'
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
