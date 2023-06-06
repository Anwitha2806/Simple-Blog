import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render()
  {
    return (
      <div className="App">
         
        <Navbar/>
        <Header/>
        <Body/>
        
        
        <Footer/>
      </div>
    );
  }
}

export default App;
