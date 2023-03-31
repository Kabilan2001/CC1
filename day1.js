import React from "react";
import "./App.css"

const alertFun=()=>{
    alert("Message from Javascript alert!");
}
const logfun=()=>{
    console.log("Message to developer");
}
var arr=["a","e","i","o"];
arr.push("u");

const fun=()=>{
    console.log(arr);
}

function Apps(){
    return(
        <div id="main">
        <h2>Lets see the output of JAVASCRIPT</h2>
        <button onClick={alertFun}>alert</button><br/><br/>
        <button onClick={logfun}>log</button><br/><br/>
        <button onClick={fun}>logonconsole</button>
        </div>
    );
}


export default Apps;