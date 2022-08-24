import React from 'react';

class GeneralPreview extends React.Component {
    render(){
        const info = this.props.info.general;
        return(
            <div>
                {info.map((item,i) => 
                <ul key={i}>
                    <li>First Name: {item.firstName}</li>
                    <li>Last Name: {item.lastName}</li>
                    <li>Title: {item.title}</li>
                    <li>Address: {item.address}</li>
                    <li>Email: {item.email}</li>
                    <li>Phone: {item.phone}</li>
                </ul>
                )}
            </div>
        )
    }
}

export default GeneralPreview;