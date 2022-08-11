import React from 'react';

class EducationPreview extends React.Component {
    render(){
        return(
            <div>
                <h1>School: {this.props.info.school}</h1>
            </div>
        )
    }
}

export default EducationPreview;