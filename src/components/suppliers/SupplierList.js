import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuppliers } from '../../actions'
import { Link } from 'react-router-dom'

class SupplierList extends Component {
  componentDidMount() {
    this.props.fetchSuppliers()
  }

  renderCategories() {}

  renderList(category) {
    return this.props.suppliers.map(supplier => {
      if (supplier.category === category) {
        return (
          <Link
            className="card"
            key={supplier.id}
            to={`/suppliers/${supplier.id}`}>
            <div className="content">
              <div className="header">
                <h3>{supplier.name}</h3>
              </div>
            </div>
          </Link>
        )
      }
    })
  }

  renderCreateButton() {
    return (
      <div>
        <Link to="/suppliers/new" className="ui button primary">
          Add Supplier
        </Link>
      </div>
    )
  }

  renderCategory() {
    const categories = [
      ...new Set(this.props.suppliers.map(supplier => supplier.category))
    ]

    return categories.map(category => {
      return (
        <div key={category} className="ui segment">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="ui link cards" style={{ marginBottom: '0px' }}>
            {this.renderList(category)}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Suppliers</h2>
        {this.renderCategory()}
        {this.renderCreateButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    suppliers: Object.values(state.suppliers)
  }
}

export default connect(mapStateToProps, { fetchSuppliers })(SupplierList)
