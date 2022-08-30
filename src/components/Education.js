import React from "react";

class Education extends React.Component {
    render() {
        let id = this.props.id;
        return (
            <div id={id} className="education">
                <label>
                    <input class="input" placeholder="School" name="school" type="text" defaultValue={this.props.defaultSchool} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input class="input" placeholder="Major" name="major" type="text" defaultValue={this.props.defaultMajor} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input class="input" placeholder="Graduation Year" name="gradYear" type="num" defaultValue={this.props.defaultGrad} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <button class="btn" onClick={this.props.handleAddEd}>Add Education</button>
            </div>
        )
    }
}

export default Education;