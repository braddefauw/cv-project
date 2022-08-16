import React from 'react';

class EducationPreview extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li>School: {this.props.info.school}</li>
                    <li>Major: {this.props.info.major}</li>
                    <li>Graduation Year: {this.props.info.gradYear}</li>
                </ul>
            </div>
        )
    }
}

export default EducationPreview;