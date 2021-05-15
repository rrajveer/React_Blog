import React from 'react';
import './App.css';
import Home from './Containers/Home/Home'
import Header from './Component/Header/Header'
import Tittle from './Component/Tittle/Tittle'
import { Route,Switch,Router, BrowserRouter} from 'react-router-dom'
import ContactUs from './Containers/Contact-Us/ContactUs'
import Post from './Containers/Post/Post'
function App() {
  return (

    <BrowserRouter>
    <div className="App">
      
       <Header/>
       <Tittle/>



       <Route  path="/" exact component={Home}/>
       <Route path="/contact-us" component={ContactUs}/>
       <Route path="/post/:slug" component={Post}/>
       
      
    </div>
    </BrowserRouter>
  );
}

export default App;
