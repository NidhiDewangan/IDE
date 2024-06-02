import axios from 'axios'
// import './App.css';
import react, { useState, Component } from 'react';
import Input from "./Input";
const Output = (props) => {
    console.log(props.output)
    console.log("props.output")
    
    return (
        <div id="out">
            output:
            <p id='output'>{props.output}</p>
        </div>
    )
}
export default Output;