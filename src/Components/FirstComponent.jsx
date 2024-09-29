import React ,{useState} from "react";
import './FirstComponent.css';

function FirstComponent(){
    const[headerText,setHeaderText] = useState("This is First React component")
    const [a,setA] = useState(10)
    function changeText(){
        setHeaderText('welcome to our page');
    }
    function updateValue(){
        setA((prevA)=>prevA+1);
    }
    return(
        <div className="container">
            <h1 style={{color:"red",fontSize:"16px"}}>{headerText}</h1>
            <input type="text" onChange={(e)=>setHeaderText(e.target.value)}></input>
            <button onClick={()=>changeText()}>Change Text</button>
            <button onClick={()=>updateValue()}>Increment</button>
            {"value of a is : "+ a}
        </div>
    )
}

export default FirstComponent;