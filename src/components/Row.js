import React, { Component } from 'react';

class Row extends Component {
  deleteRow = (e) => {
    this.props.deleteRowFn(this.props.dictionary, parseInt(e.target.id));
  }

  editRow = (e) => {
    this.props.editRowFn(this.props.dictionary, parseInt(e.target.id));
  }

  render() {
    const { row } = this.props;
    return (
      <tr>
        <td>{row.domain}</td>
        <td>{row.range}</td>
        <td>
          <i id={row.id} className="fas fa-trash-alt fa-fw" onClick={e => this.deleteRow(e)}></i>
        </td>
        <td>
          <i id={row.id} className="fas fa-pen fa-fw" onClick={e => this.editRow(e)}></i>
        </td>
      </tr>
    );
  }
}
export default Row;
