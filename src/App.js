import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [ name , setName ] = useState('');
  const [ pass, setPass ] = useState('');

  Axios.get('/ping')
  .then((res)=>(console.log(res)))
  .catch((err)=>{console.log(err)});
  // Axios.get(, )

  return (
    <div>
    <input type='text' className='userNameInput' placeholder='User Name' onChange={(e)=>{
      setName(e.target.value);
    }}/>
    <input type='text' className='passwordInput' placeholder='password' onChange={(e)=>{
      setPass(e.target.value);
    }}/>
    <button value='Name/Pass Send' onClick={()=>{
      Axios.get('/api/save/namepass',{
        params: {
          user : name,
          pass : pass
        }
      })
      .then(console.log)
      .catch(console.log)
    }}/>
    <button value='gittest' onClick={()=>{
      Axios.get('/api/git/test')
      .then(console.log)
      .catch(console.log)
    }}/>
    </div>
  );
}

export default App;
