import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll, deleteOne } from '../actions/po.action';

class List extends Component {
  componentWillMount() {
    this.props.fetchAll();
    console.log('aaa', this.props);
  }

  render() {
    const list = this.props.po.datas.map((po, i) => {
      return (
        <tr key={po.id}>
          <td>{i + 1}</td>
          <td>{po.nama}</td>
          <td>
            <button>Edit</button>
            <button onClick={() => this.props.deleteOne(po.id)}>Delete</button>
          </td>
        </tr>
      );
    });
    return (
      <table>
        {console.log('assasas', this.props)}
        <thead>
          <tr>
            <td>No</td>
            <td>PO</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  po: state.po
});

export default connect(
  mapStateToProps,
  { fetchAll, deleteOne }
)(List);
