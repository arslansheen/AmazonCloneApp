import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import './App.css';
import React from 'react';
import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import CheckOut from './Components/CheckOut';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from "./Components/Orders";
//load stripe into a promise
const stripePromise=loadStripe("pk_test_51LxPodCI8b6kimS58gpyXgnPIWzKW498y8AVJo8klNH4PdPdBkdscydEfF8LlLgCiVFSjFDQH1fkVumPnYo0uVbC0032D8TwXk")
function App() {
;
  return (
    // <>
<Router>
  <Routes>
<Route path='/login' element={<Login/>}/>
<Route path='/orders' element={
  <>
<Header/>
<Orders/>
  </>
}/>
<Route path='/payment' element={

<>
<Header/>
<Elements stripe={stripePromise}>
<Payment/>
</Elements>
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
