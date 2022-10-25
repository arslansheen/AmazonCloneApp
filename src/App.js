import './App.css';
import React from 'react';
import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import CheckOut from './Components/CheckOut';
import Payment from './Components/Payment';
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
<Route path='/payment' element={
<>
<Header/>
<Payment/>
</>
}/>
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
