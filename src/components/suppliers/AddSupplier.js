import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSupplier } from '../../actions'
import SupplierForm from './SupplierForm'

class AddSupplier extends Component {
  onSubmit = formValues => {
    this.props.addSupplier(formValues)
  }

  render() {
    return (
      <div>
        <h3>Add a Supplier</h3>
        <SupplierForm buttonAction="Add" onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { addSupplier })(AddSupplier)
