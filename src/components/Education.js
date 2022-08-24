import React from "react";

class Education extends React.Component {
    render() {
        let id = this.props.id;
        console.log(this.props.education);
        return (
            <div id={id} className="education">
                <label>
                    School:
                    <input name="school" type="text" defaultValue={this.props.defaultValue} onChange={this.props.handleChangeEd} />
                </label>
                <label>
                    Major:
                    <input name="major" type="text" defaultValue={this.props.education.major} onChange={this.props.handleChangeEd} />
                </label>
                <label>
                    Graduation Year:
                    <input name="gradYear" type="num" defaultValue={this.props.education.gradYear} onChange={this.props.handleChangeEd} />
                </label>
                <button onClick={this.props.handleAddEd}>Add Education</button>
            </div>
        )
    }
}

export default Education;