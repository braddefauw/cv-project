import React from "react";

class Experience extends React.Component {
    render() {
        let id = this.props.id;
        return (
            <div id={id}>
                <label>
                    <input placeholder="Company" name="company" type="text" defaultValue={this.props.experience.company} onChange={this.props.handleChangeEx} />
                </label>
                <br></br>
                <label>
                    <input placeholder="Position" name="position" type="text" defaultValue={this.props.experience.position} onChange={this.props.handleChangeEx} />
                </label>
                <br></br>
                <label>
                    <input placeholder="Location" name="location" type="text" defaultValue={this.props.experience.location} onChange={this.props.handleChangeEx} />
                </label>
                <br></br>
                <label>
                    <input placeholder="Start Date (Year)" name="start" type="text" defaultValue={this.props.experience.start} onChange={this.props.handleChangeEx} />
                </label>
                <br></br>
                <label>
                    <input placeholder="End Date (Year)" name="end" type="text" defaultValue={this.props.experience.end} onChange={this.props.handleChangeEx} />
                </label>
                <br></br>
                <button onClick={this.props.handleAddEx}>Add Experience</button>
            </div>
        )
    }
}

export default Experience;