import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSupplier, editSupplier } from '../../actions'
import SupplierForm from './SupplierForm'

class EditSupplier extends Component {
  componentDidMount() {
    this.props.fetchSupplier(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editSupplier(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.supplier) {
      return <div>Loading...</div>
    }
    return (
      <SupplierForm
        buttonAction="Save Changes"
        onSubmit={this.onSubmit}
        initialValues={_.pick(
          this.props.supplier,
          'name',
          'address',
          'phone',
          'email',
          'category'
        )}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { supplier: state.suppliers[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSupplier, editSupplier })(
  EditSupplier
)
