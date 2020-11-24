import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import Createpost from './components/screens/Createpost'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={Signin} exact></Route>
        <Route path="/profile" component={Profile} exact></Route>
        <Route path="/signup" component={Signup} exact></Route>
        <Route path="/create" component={Createpost} exact></Route>
      
    </BrowserRouter>

  );
}

export default App;
