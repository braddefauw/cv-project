import React from 'react';

class ExperiencePreview extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li>Company: {this.props.info.company}</li>
                    <li>Position: {this.props.info.position}</li>
                    <li>Location: {this.props.info.location}</li>
                    <li>Start Date: {this.props.info.start}</li>
                    <li>End Date: {this.props.info.end}</li>
                </ul>
            </div>
        )
    }
}

export default ExperiencePreview;