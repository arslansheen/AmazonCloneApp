import './App.css';
import React from 'react';
import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import CheckOut from './Components/CheckOut';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
function App() {
  return (
    // <>
<Router>
  <Routes>
<Route path='/login' element={<Login/>}/>
  </Routes>
< Routes>
<Route path='/checkout' element={
<>
<Header/>
<CheckOut/>
</>
}/>
<Route path='/' element={<>
<Header/>
 <Body/>
</>}>

</Route>
</Routes> 
</Router>
    // </>

    );
}

export default App;
