import React from 'react';

class EducationPreview extends React.Component {
    render(){
        const info = this.props.info.education;
        // console.log(info);
        
        return(
            <div>
                {info.map((item,i) => 
                <ul key={i} id={this.props.educationId}>
                    <li>School: {info[i].school}</li>
                    <li>Major: {info.major}</li>
                    <li>Graduation Year: {info.gradYear}</li>
                </ul>
                )}
            </div>
        )
    }
}

export default EducationPreview;