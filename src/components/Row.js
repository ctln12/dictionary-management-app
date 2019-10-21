import React, { Component } from 'react';

class Row extends Component {
  deleteRow = (e) => {
    this.props.deleteRowFn(this.props.dictionary, parseInt(e.target.id));
    console.log('deleted');
  }

  editRow = (e) => {
    this.props.editRowFn(this.props.dictionary, parseInt(e.target.id));
    console.log('edited');
  }

  render() {
    const { row } = this.props;
    return (
      <tr>
        <td>{row.domain}</td>
        <td>{row.range}</td>
        <td><button id={row.id} onClick={e => this.deleteRow(e)}>x</button></td>
        <td><button id={row.id} onClick={e => this.editRow(e)}>edit</button></td>
      </tr>
    );
  }
}
export default Row;
