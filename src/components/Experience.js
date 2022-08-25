import React from "react";

class Experience extends React.Component {
    render() {
        let id = this.props.id;
        return (
            <div id={id}>
                <label>
                    Company:
                    <input name="company" type="text" defaultValue={this.props.experience.company} onChange={this.props.handleChangeEx} />
                </label>
                <label>
                    Position:
                    <input name="position" type="text" defaultValue={this.props.experience.position} onChange={this.props.handleChangeEx} />
                </label>
                <label>
                    Location:
                    <input name="location" type="text" defaultValue={this.props.experience.location} onChange={this.props.handleChangeEx} />
                </label>
                <label>
                    Start Date (Year):
                    <input name="start" type="text" defaultValue={this.props.experience.start} onChange={this.props.handleChangeEx} />
                </label><label>
                    End Date (Year):
                    <input name="end" type="text" defaultValue={this.props.experience.end} onChange={this.props.handleChangeEx} />
                </label>
            </div>
        )
    }
}

export default Experience;