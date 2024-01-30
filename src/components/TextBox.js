import {useState} from 'react';

export default function TextBox (properties){

    

    const handleOnClick = (event)=>{
        let newText = text.toUpperCase();
       setText(newText);
       properties.showAlert("Converted to Upper case","Success");
    }

    const handleOnChange = (event)=>{
        console.log(event.target.value)
       setText(event.target.value);
    }
    const [text, setText] = useState("Hello world");
  return (
    <>

    <div className="container">

    
      <form >
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1" style={{color: properties.mode==="light"? "black" : "white"}} >Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3" onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button type="button" onClick={handleOnClick} >Upper</button>
      </form>
      </div>
    </>
  );
};