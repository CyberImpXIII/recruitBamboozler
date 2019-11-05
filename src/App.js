import React from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  Axios.get('/api/save')
  .then((res)=>(console.log(res)))
  .catch((err)=>{console.log(err)});
  return (
    <div>
    </div>
  );
}

export default App;
