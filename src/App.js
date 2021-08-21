
import './App.css';
import React, { useState } from 'react'

import Navbar from './component/Navbar';
 import TextForm from './component/TextForm';
 import Alert from './component/Alert';
//  import About from  './component/About';



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
setAlert({
  msg:message,
  type: type
})
setTimeout(()=>{
  setAlert(null);
},1600)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#223";
      showAlert("Dark mode has been enabled", "success");
      document.title="Text Util--Home dark mode";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="rgb(221, 245, 210)";
      showAlert("Light mode has been enabled", "success");
      document.title="Text Util--Home light mode";
    }
  }
  return (
  <>
 
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
<TextForm heading="Enter the text to analyze below" mode={mode} />
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch> */}
</div>

</>
  );
}

export default App;
