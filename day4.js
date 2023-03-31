import React from "react";
import  Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './App.css';


const fruits= [
   "Apple","Banana","Cherry","Durian","Elderberry"
  ];
  

function Sample(){
    const [fruit,setFruit]=React.useState("");
    const [name, setName]=React.useState("");
    const handle=()=>{console.log("Hello, "+name+"!Your favourite fruit is "+fruit);}
    
    return(
        <div id="box">
        <h2>Enter your Name and Favourite fruit</h2>
        <div>
        <form >
        
        <TextField  value={name} onChange={(e)=>setName(e.target.value)} id="colour" sx={{width:300,margin:3}} label="Name" variant="outlined" />
       <Autocomplete
       onChange={(event, value) =>setFruit(value)}
    
      options={fruits}
      sx={{ width: 300 ,paddingLeft:73.7 }}
     
      renderInput={(ip) => <TextField {...ip} variant="outlined" label="Choose your fruit" />}/>

        <Button onClick={handle }  variant="outlined" sx={{margin:3}} >submit</Button>
        </form></div>
        </div>
    )
}
export default Sample;
 


