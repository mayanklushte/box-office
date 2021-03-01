import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

// children layout 
// we wrap MainPageLayout Component arrond the content of page
// this act as children in javascript and then we can grab this in mainPageLaout.js
// We use this to control template inheritance kind thing in react
// this how we should manage layouts in react

const Home = () => {
  const [input, setInput] = useState('');

  const onSearch = () => {
    // this is browser's api fetch which fetch data from remote links or api
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result=>{
      console.log(result);
      
    }); 
    
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) =>{
    if(ev.keyCode===13){
      onSearch()
    };
  };

// onkey down is function where we check which key is press using javascript keycode
// on chnage will handle change of element and {input} is used to set useState element to input box

  return (
    <MainPageLayout>
     <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
     <button type='button' onClick={onSearch}>Search</button>

    </MainPageLayout>
  );
};

export default Home
