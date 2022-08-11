import React from "react";
import EducationPreview from "./EducationPreview";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          school: '',
          major: '',
          gradYear: '',
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
    alert(`School: ${this.state.school}, Major: ${this.state.major}, Graduation: ${this.state.gradYear}`);
    event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    School:
                    <input name="school" type="text" value={this.state.school} onChange={this.handleChange} />
                </label>
                <label>
                    Major:
                    <input name="major" type="text" value={this.state.major} onChange={this.handleChange} />
                </label>
                <label>
                    Graduation Year:
                    <input name="gradYear" type="num" value={this.state.gradYear} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <EducationPreview info={this.state}/>
            </div>
        )
    }
}

export default Education;