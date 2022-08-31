import React from 'react';

class EducationPreview extends React.Component {
    render(){
        const info = this.props.info.education;
        
        return(
            <div>
                <h4 className="preview-title">Educational History</h4>
                <hr className="hr"></hr>
                {info.map((item,i) => 
                <div className="ed-preview-div" key={i} id={this.props.educationId}>
                    <div><span className="school-name">{item.school}</span>, {item.location}</div>
                    <div><span className="school-degree">{item.degree} in {item.subject}</span></div>
                    <div className="school-dates">{item.from} - {item.to}</div><br></br>
                </div>
                )}
            </div>
        )
    }
}

export default EducationPreview;