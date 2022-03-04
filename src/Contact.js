import React from "react";
import './Contact.css';
function Contact(props){
    var a = props.name.toUpperCase();
    var st={color:"red",padding:10}
    return(
        <div className="test" style={props.st}>
            <p>{props.id[0].toLowerCase()}</p>
            <p>{props.id[1].toUpperCase()}</p>
            <h1>{a} Contact Page</h1>
        <label>Email Address:</label> 
        <input type="text"/>
        <br/>
        <button>Send</button> 
        </div>
    )
}

export default Contact;