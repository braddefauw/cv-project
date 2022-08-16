import React from "react";

class Education extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                <input type="submit" defaultValue="Submit" />
                </form>
            </div>
        )
    }
}

export default Education;