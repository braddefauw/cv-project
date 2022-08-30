import React from "react";

class General extends React.Component {
  render() {
    let id = this.props.id;

    return (
      <div id={id}>
        <h3>General Information</h3>
        <form>
          <label>
            <input className="input" placeholder="First Name" name="firstName" type="text" defaultValue={this.props.general.firstName} onChange={this.props.handleChangeGen} />
          </label>
          <br></br>
          <label>
            <input className="input" placeholder="Last Name" name="lastName" type="text" defaultValue={this.props.general.lastName} onChange={this.props.handleChangeGen} />
          </label>
          <br></br>
          <label>
            <input className="input" placeholder="Title" name="title" type="text" defaultValue={this.props.general.title} onChange={this.props.handleChangeGen} />
          </label>
          <br></br>
          <label>
            <input className="input" placeholder="Address" name="address" type="text" defaultValue={this.props.general.address} onChange={this.props.handleChangeGen} />
          </label>
          <br></br>
          <label>
            <input className="input" placeholder="Email" name="email" type="email" defaultValue={this.props.general.email} onChange={this.props.handleChangeGen} />
          </label>
          <br></br>
          <label>
            <input className="input" placeholder="Phone Number" name="phone" type="tel" defaultValue={this.props.general.phone} onChange={this.props.handleChangeGen} />
          </label>
        </form>
      </div>
    )
  }
}

export default General;