import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSupplier } from '../../actions'

class SupplierShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params

    this.props.fetchSupplier(id)
  }

  render() {
    if (!this.props.supplier) {
      return <div>Loading...</div>
    }
    const { name, address, phone, email, category, id } = this.props.supplier

    return (
      <Fragment>
        <div className="ui card">
          <div className="content">
            <h2 className="header">{name}</h2>
          </div>
          <div className="content">
            <div className="description">
              <p>{address}</p>
              <p>{phone}</p>
              <p>{email}</p>
              <p>{category}</p>
            </div>
          </div>
          <div className="extra content">
            <Link to={`/suppliers/edit/${id}`} className="ui button primary">
              Edit
            </Link>
            <Link to={`/suppliers/delete/${id}`} className="ui button negative">
              Delete
            </Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { supplier: state.suppliers[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSupplier })(SupplierShow)
