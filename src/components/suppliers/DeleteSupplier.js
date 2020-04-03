import React, { Component, Fragment } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchSupplier, deleteSupplier } from '../../actions'
import { Link } from 'react-router-dom'

class DeleteSupplier extends Component {
  componentDidMount() {
    this.props.fetchSupplier(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params

    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteSupplier(id)}
          className="ui negative button">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    )
  }

  renderContent() {
    if (!this.props.supplier) {
      return 'Are you sure you want to delete this supplier?'
    }

    return `Are you sure you want to delete this supplier - ${this.props.supplier.name} ?`
  }

  render() {
    return (
      <Modal
        title="Delete Supplier"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { supplier: state.suppliers[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSupplier, deleteSupplier })(
  DeleteSupplier
)
