import React from "react";

class Experience extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Company:
                        <input name="company" type="text" defaultValue={this.props.experience.company} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Position:
                        <input name="position" type="text" defaultValue={this.props.experience.email} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Tasks:
                        <input name="tasks" type="text" defaultValue={this.props.experience.phone} onChange={this.props.handleChange} />
                    </label>
                    <label>
                        Start Date:
                        <input name="start" type="date" defaultValue={this.props.experience.start} onChange={this.props.handleChange} />
                    </label><label>
                        End Date:
                        <input name="end" type="date" defaultValue={this.props.experience.end} onChange={this.props.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default Experience;