import React from "react";

class Education extends React.Component {
    render() {
        return (
            <div>
                <form>
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
                    <button onClick={this.props.handleAdd}>Add Experience</button>
                    {this.props.inputList.map(function(input, index) {
                    return input  
                    })}
                </form>
            </div>
        )
    }
}

export default Education;