import React from "react";

class Experience extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Company:
                        <input name="company" type="text" defaultValue={this.props.experience.company} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Position:
                        <input name="position" type="text" defaultValue={this.props.experience.position} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Location:
                        <input name="location" type="text" defaultValue={this.props.experience.location} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Start Date (Year):
                        <input name="start" type="text" defaultValue={this.props.experience.start} onChange={this.props.handleChange} />
                    </label><label>
                        End Date (Year):
                        <input name="end" type="text" defaultValue={this.props.experience.end} onChange={this.props.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default Experience;