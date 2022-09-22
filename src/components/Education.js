import React from "react";

class Education extends React.Component {
    render() {
        let id = this.props.id;
        return (
            <div id={id} className="education">
                <label>
                    <input className="input" placeholder="School" name="school" type="text" defaultValue={this.props.defaultSchool} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input className="input" placeholder="Location (City, State)" name="location" type="text" defaultValue={this.props.defaultLocation} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input className="input" placeholder="Degree" name="degree" type="text" defaultValue={this.props.defaultDegree} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input className="input" placeholder="Subject" name="subject" type="text" defaultValue={this.props.defaultSubject} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input className="input" placeholder="From" name="from" type="num" defaultValue={this.props.defaultFrom} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <label>
                    <input className="input" placeholder="To" name="to" type="num" defaultValue={this.props.defaultTo} onChange={this.props.handleChangeEd} />
                </label>
                <br></br>
                <button className="btn" onClick={this.props.handleAddEd}>Add</button>
                {/* <button className="btn" id={id} onClick={this.props.handleDeleteEd}>Delete</button> */}
            </div>
        )
    }
}

export default Education;