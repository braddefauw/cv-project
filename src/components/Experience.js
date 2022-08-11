import React from "react";
import ExperiencePreview from "./ExperiencePreview";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          company: '',
          position: '',
          tasks: '',
          start: '',
          end: '',
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
    alert(`Company: ${this.state.company}, Position: ${this.state.position}, Tasks: ${this.state.tasks}, Start Date: ${this.state.start}, End Date: ${this.state.end}`);
    event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Company:
                    <input name="company" type="text" value={this.state.company} onChange={this.handleChange} />
                </label>
                <label>
                    Position:
                    <input name="position" type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Tasks:
                    <input name="tasks" type="text" value={this.state.phone} onChange={this.handleChange} />
                </label>
                <label>
                    Start Date:
                    <input name="start" type="date" value={this.state.start} onChange={this.handleChange} />
                </label><label>
                    End Date:
                    <input name="end" type="date" value={this.state.end} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                <ExperiencePreview info={this.state}/>
            </div>
        )
    }
}

export default Experience;