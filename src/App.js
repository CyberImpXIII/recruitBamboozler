import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [ name , setName ] = useState('');
  const [ pass, setPass ] = useState('');
  Axios.get('/api/save/test')
  .then((res)=>(console.log(res)))
  .catch((err)=>{console.log(err)});
  return (
    <div>
    <input type='text' className='userNameInput' placeholder='User Name' onChange={(e)=>{
      setName(e.target.value);
    }}/>
    <input type='text' className='passwordInput' placeholder='password' onChange={(e)=>{
      setPass(e.target.value);
    }}/>
    <button />
    </div>
  );
}

export default App;
