import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SupplierForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div style={{ color: 'red' }}>{error}</div>
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error">
        <Field name="name" component={this.renderInput} label="Name" />
        <Field name="address" component={this.renderInput} label="Address" />
        <Field name="phone" component={this.renderInput} label="Phone" />
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="category" component={this.renderInput} label="Category" />
        <button className="ui button primary">{this.props.buttonAction}</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.name) {
    errors.name = 'You must enter a name'
  }

  if (!formValues.address) {
    errors.address = 'You must enter an address'
  }

  if (!formValues.phone) {
    errors.phone = 'You must enter a phone number'
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email'
  }

  if (!formValues.category) {
    errors.category = 'You must enter a category'
  }

  return errors
}

export default reduxForm({
  form: 'supplierForm',
  validate
})(SupplierForm)
