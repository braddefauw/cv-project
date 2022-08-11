import React from 'react';

class GeneralPreview extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <li>First Name: {this.props.info.firstName}</li>
                    <li>Last Name: {this.props.info.lastName}</li>
                    <li>Title: {this.props.info.title}</li>
                    <li>Address: {this.props.info.address}</li>
                    <li>Email: {this.props.info.email}</li>
                    <li>Phone: {this.props.info.phone}</li>
                </ul>
            </div>
        )
    }
}

export default GeneralPreview;