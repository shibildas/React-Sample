import React,{useState } from 'react';
import {Routes,Route,useNavigate} from 'react-router-dom'
import { AppContext } from './AppContext';
import About from './Container/About';
import Profile from './Container/Profile';

function App() {
  const [state,setState]= useState(20)
  const navigate =useNavigate()
  return (
    <div className="App">
   
      <button onClick={()=>navigate('/about')}> About Me</button>
      <button onClick={()=>navigate('/profile')}> Profile</button>
      <AppContext.Provider value={{data:state}}>

      <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile />}/>
         

      </Routes>
      </AppContext.Provider>
     
    </div>
  );
}


export default App;
