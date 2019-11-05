import React from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  Axios.get('/api/save/test')
  .then((res)=>(console.log(res)))
  .catch((err)=>{console.log(err)});
  return (
    <div>
    <input type='text' className='userNameInput' placeholder='User Name'/>
    <input type='text' className='passwordInput' placeholder='password'/>
    <button />
    </div>
  );
}

export default App;
