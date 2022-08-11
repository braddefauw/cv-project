import React from 'react';

class ExperiencePreview extends React.Component {
    render(){
        return(
            <div>
                <h1>Company: {this.props.info.company}</h1>
            </div>
        )
    }
}

export default ExperiencePreview;