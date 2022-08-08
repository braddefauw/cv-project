import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState(
      {[name]: value}
      );
  }

  handleSubmit(event) {
    alert(`Name: ${this.state.name}, Email: ${this.state.email}, Phone: ${this.state.phone}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default General;