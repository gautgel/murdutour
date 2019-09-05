import React, { Component } from 'react';
function LeText(props) {
    return <p>{props.description}</p>;
}

class Text extends Component {
    state = {  }
    render() { 
        return (
            <p>{this.props.description}</p>
         );
    }
}
 
export default Text;