import React from "react";

class General extends React.Component {
  render() {
    let id = this.props.id;

    return (
      <div id={id}>
        <form>
          <label>
            First Name:
            <input name="firstName" type="text" defaultValue={this.props.general.firstName} onChange={this.props.handleChangeGen} />
          </label>
          <label>
            Last Name:
            <input name="lastName" type="text" defaultValue={this.props.general.lastName} onChange={this.props.handleChangeGen} />
          </label>
          <label>
            Title:
            <input name="title" type="text" defaultValue={this.props.general.title} onChange={this.props.handleChangeGen} />
          </label>
          <label>
            Address:
            <input name="address" type="text" defaultValue={this.props.general.address} onChange={this.props.handleChangeGen} />
          </label>
          <label>
            Email:
            <input name="email" type="email" defaultValue={this.props.general.email} onChange={this.props.handleChangeGen} />
          </label>
          <label>
            Phone Number:
            <input name="phone" type="tel" defaultValue={this.props.general.phone} onChange={this.props.handleChangeGen} />
          </label>
        </form>
      </div>
    )
  }
}

export default General;