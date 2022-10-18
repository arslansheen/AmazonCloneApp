import './App.css';
import Header from './Components/Header.jsx'
import Body from './Components/Body.jsx'
import CheckOut from './CheckOut';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    // <>
<Router>
<Header/>
< Routes>
<Route path='/checkout' element={<CheckOut/>}/>
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
