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
import Login from './Login';
function App() {
  return (
    // <>
<Router>
<Header/>
< Routes>
<Route path='/checkout' element={<CheckOut/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/' element={<>
 <Body/>
</>}>

</Route>
</Routes> 
</Router>
    // </>

    );
}

export default App;
