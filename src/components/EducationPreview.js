import React from 'react';

class EducationPreview extends React.Component {
    render(){
        const info = this.props.info.education;
        // console.log(info);
        
        return(
            <div>
                {info.map((item,i) => 
                <ul key={i} id={this.props.educationId}>
                    <li>School: {item.school}</li>
                    <li>Major: {item.major}</li>
                    <li>Graduation Year: {item.gradYear}</li>
                </ul>
                )}
            </div>
        )
    }
}

export default EducationPreview;