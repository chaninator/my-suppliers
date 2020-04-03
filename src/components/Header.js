import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        My Suppliers
      </Link>
      <div className="right menu">
        <Link to="/suppliers/new" className="item">
          Add a Supplier
        </Link>
      </div>
    </div>
  )
}

export default Header
