import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import SupplierList from './suppliers/SupplierList'
import Header from '../components/Header'
import history from '../history'
import AddSupplier from './suppliers/AddSupplier'
import DeleteSupplier from './suppliers/DeleteSupplier'
import EditSupplier from './suppliers/EditSupplier'
import SupplierShow from './suppliers/SupplierShow'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={SupplierList} />
            <Route path="/suppliers/new" exact component={AddSupplier} />
            <Route path="/suppliers/edit/:id" exact component={EditSupplier} />
            <Route
              path="/suppliers/delete/:id"
              exact
              component={DeleteSupplier}
            />
            <Route path="/suppliers/:id" exact component={SupplierShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
