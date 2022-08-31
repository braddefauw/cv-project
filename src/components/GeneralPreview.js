import React from 'react';

class GeneralPreview extends React.Component {
    render(){
        const info = this.props.info.general;
        return(
            <div>
                {info.map((item,i) => 
                <div key={i}>
                    <h1 className="name">{item.title} {item.firstName} {item.lastName}</h1>
                    <h4 className="general-info">{item.address} ● {item.email} ● {item.phone}</h4>
                </div>
                )}
            </div>
        )
    }
}

export default GeneralPreview;