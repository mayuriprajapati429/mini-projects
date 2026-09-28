import React, { useEffect, useState } from 'react'

function Calculator() {
    const [display,setDisplay] = useState("")
        function handleClick(input){
        if(input === 'C'){
            setDisplay("");
            return;
        }
        if(input === '='){
            try {
                setDisplay(eval(display).toString());
                return;
            } catch (error) {
                setDisplay("Error Occured") 
                return;
            }
        }
        setDisplay(display + input);
    }
    const calcbutton = {
        height:"60px",
        width:"60px",
        margin:"10px",
        fontSize:"18px"
    }
    const input = {
        height:"6vh",
        width:"20vw",
        fontSize:"22px",
        display:"flex",
        transform:"translateX(403px)",
        marginTop:"100px",
        marginBottom:"48px"
    }
  return (
    <>
    <input style={input} type="text" id="" name="" value={display} readOnly/>
   <span>
     <button onClick={()=>handleClick("C")} style={calcbutton} className='calc-button'>C</button>
    <button onClick={()=>handleClick("%")} style={calcbutton} className='calc-button'>%</button>
    <button onClick={()=>handleClick("/")} style={calcbutton} className='calc-button'>/</button>
   
    
        <button onClick={()=>handleClick("=")} style={calcbutton} className='calc-button'>=</button>
        </span>
        <span>
    <button onClick={()=>handleClick("7")} style={calcbutton} className='calc-button'>7</button>
    <button onClick={()=>handleClick("8")} style={calcbutton} className='calc-button'>8</button>
    
    <button onClick={()=>handleClick("9")} style={calcbutton} className='calc-button'>9</button>
    <button onClick={()=>handleClick("/")} style={calcbutton} className='calc-button'>-</button>
    </span>
    <span>
    <button onClick={()=>handleClick("4")} style={calcbutton} className='calc-button'>4</button>
    <button onClick={()=>handleClick("5")} style={calcbutton} className='calc-button'>5</button>
    <button onClick={()=>handleClick("6")} style={calcbutton} className='calc-button'>6</button>
    <button onClick={()=>handleClick("+")} style={calcbutton} className='calc-button'>+</button>
    </span>
    <span>
    <button onClick={()=>handleClick("1")} style={calcbutton} className='calc-button'>1</button>
        <button onClick={()=>handleClick("2")} style={calcbutton} className='calc-button'>2</button>
    <button onClick={()=>handleClick("3")} style={calcbutton} className='calc-button'>3</button>
    <button onClick={()=>handleClick("*")} style={calcbutton} className='calc-button'>*</button>
    </span>
    </>
  )
}

export default Calculator