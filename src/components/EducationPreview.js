import React from 'react';

class EducationPreview extends React.Component {
    render(){
        const info = this.props.info.education;
        console.log(info);
        
        return(
            <div>
                {info.map((item,i) => 
                <ul key={i}>
                    <li>School: {info[i].school}</li>
                    <li>Major: {info.major}</li>
                    <li>Graduation Year: {info.gradYear}</li>
                </ul>
                )}
                    {/* <li>School: {this.props.info.school}</li>
                    <li>Major: {this.props.info.major}</li>
                    <li>Graduation Year: {this.props.info.gradYear}</li> */}
                {/* </ul> */}
            </div>
        )
    }
}

export default EducationPreview;