import React from "react";

class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <label>
                    School:
                    <input name="school" type="text" defaultValue={this.props.education.school} onChange={this.props.handleChange} />
                </label>
                <label>
                    Major:
                    <input name="major" type="text" defaultValue={this.props.education.major} onChange={this.props.handleChange} />
                </label>
                <label>
                    Graduation Year:
                    <input name="gradYear" type="num" defaultValue={this.props.education.gradYear} onChange={this.props.handleChange} />
                </label>
                <button onClick={this.props.handleAddEd}>Add Education</button>
            </div>
        )
    }
}

export default Education;