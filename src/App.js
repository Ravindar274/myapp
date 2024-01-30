// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";

function App() {

  const [navTheme, setNavTheme] = useState("myNavBarLight");

  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      setNavTheme('myNavBarDark');
      document.body.style.backgroundColor='grey';
    } else {
      setMode('light');
      setNavTheme('myNavBarLight');
      document.body.style.backgroundColor='white';
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (body, type)=> {

    setAlert({
      body:body, 
      type: type
    });
setTimeout(()=>{
  setAlert(null);
},1000)

  }

  return (
    <>
      <Navbar  toggleMode={toggleMode}  navTheme={navTheme} />
      <Alert alert={alert} />
      <TextBox showAlert={showAlert}  mode={mode} />
     
    </>
  );
}

export default App;
