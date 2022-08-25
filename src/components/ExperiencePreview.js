import React from 'react';

class ExperiencePreview extends React.Component {
    render(){
        const info = this.props.info.experience;
        return(
            <div>
                {info.map((item,i) => 
                <ul key={i}>
                    <li>Company: {item.company}</li>
                    <li>Position: {item.position}</li>
                    <li>Location: {item.location}</li>
                    <li>Start Date: {item.start}</li>
                    <li>End Date: {item.end}</li>
                </ul>
                )}
            </div>
        )
    }
}

export default ExperiencePreview;