import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
    setText(newText);
    }
    const handleUpClick2=()=>{
     let newText=text.toLowerCase();
    setText(newText);
    }
    const handleOnChange=(event)=>{
    setText(event.target.value);
    }
    const bold=()=>{
        const txt=document.getElementById("myBox");
        txt.style.fontWeight="700";
    }
    const normal=()=>{
        const txt=document.getElementById("myBox");
        txt.style.fontWeight="400";
    }
    const italic=()=>{
        const txt=document.getElementById("myBox");
        txt.style.fontStyle="italic";
    }
    const textNormal=()=>{
        const txt=document.getElementById("myBox");
        txt.style.fontStyle="normal";
    }
    
    const color=()=>{
        const txt=document.getElementById("myBox");
        const clr=document.getElementById("color");
        txt.style.color=clr.value;
    }
    const txtarbg=()=>{
        const txt=document.getElementById("myBox");
        const clr=document.getElementById("color2");
        txt.style.backgroundColor=clr.value;
    }
    const handleClear=()=>{
        const newText='';
        setText(newText);
    }
    const handleCopy=()=>{
        const txt=document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
      
    }
    const removeExtraSpaces=()=>{
     
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    return (
        <>
        <div className="container">
<div className="mb-3">
  <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading} </h1>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
</div>  
<button className="btn btn-primary p-2" onClick={handleUpClick}>ConvertToUppercase</button>    
<button className="btn btn-primary p-2 m-2" onClick={handleUpClick2}>ConvertToLoweCase</button>  
<button className="btn btn-primary p-2 m-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary p-2 m-2" onClick={handleClear}>Clear Text</button> 
<button className="btn btn-primary p-2 m-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button> 
<button className="btn btn-primary p-2 m-2" onClick={bold}>Bold</button> 
<button className="btn btn-primary p-2 m-2" onClick={normal}>Normal</button>
<button className="btn btn-primary p-2 " onClick={italic}>Italic</button>
<button className="btn btn-primary p-2 m-2" onClick={textNormal}>Normal_text</button>

<button className="btn btn-primary p-2 m-2" onChange={color}>
<input type="color" name="color" id="color" />Text_Color </button>
<button className="btn btn-primary p-2 m-2" onChange={txtarbg}>
<input type="color" name="color" id="color2" />Change_bg </button>

 
</div>
<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h1>Your text summary</h1>
    <p><b>{text.trim().split(" ").length }</b> words,<b>{text.length}</b> characters</p>
    <p><b>{.008*text.split(" ").length}</b> minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the text box to preview it here!"}</p>
</div>
</>
    )
}
