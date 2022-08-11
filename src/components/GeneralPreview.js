import React from 'react';

class GeneralPreview extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello {this.props.info.firstName}</h1>
            </div>
        )
    }
}

export default GeneralPreview;