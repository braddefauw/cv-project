import React from 'react';

class ExperiencePreview extends React.Component {
    render(){
        const info = this.props.info.experience;
        return(
            <div>
                <h4 className="preview-title">Experience</h4>
                <hr className="hr"></hr>
                {info.map((item,i) => 
                <div className='ex-preview-div' key={i}>
                    <div><span className='company-name'>{item.company}</span>, {item.location} - <span className='position'>{item.position}</span></div>
                    <div className='ex-dates'>{item.start} - {item.end}</div><br></br><br></br>
                </div>
                )}
            </div>
        )
    }
}

export default ExperiencePreview;