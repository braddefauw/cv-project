import React from "react";

class General extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            First Name:
            <input name="firstName" type="text" defaultValue={this.props.general.firstName} onChange={this.props.handleChange} />
          </label>
          <label>
            Last Name:
            <input name="lastName" type="text" defaultValue={this.props.general.lastName} onChange={this.props.handleChange} />
          </label>
          <label>
            Title:
            <input name="title" type="text" defaultValue={this.props.general.title} onChange={this.props.handleChange} />
          </label>
          <label>
            Address:
            <input name="address" type="text" defaultValue={this.props.general.address} onChange={this.props.handleChange} />
          </label>
          <label>
            Email:
            <input name="email" type="email" defaultValue={this.props.general.email} onChange={this.props.handleChange} />
          </label>
          <label>
            Phone Number:
            <input name="phone" type="tel" defaultValue={this.props.general.phone} onChange={this.props.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default General;