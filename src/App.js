import logo from './logo.svg';
import './App.css';
import './Styles/Styles.css'
import Sample from './Day_1/Sample'
import JoinUs from './Day_1/JoinUs'
import { Component } from 'react';
import Setting from './Day_1/Setting';
import Login from './Day_1/Login';
import ContactUs from './Day_1/ContactUs';
import Search from './Day_1/Search';
import Help from './Day_1/Help';
import Home from './Day_1/Home';
import Download from './Day_1/Download';
import Counter from './Day2/Counter';

class App extends Component {
  render ()
  {
  return (
    <div id='main'> 
    {/* <Sample/>

    
    <div id="tags">
       <JoinUs/>
    <Setting/>
    <Login/>
    <ContactUs/>
    <Search/>
    <Help/>
    <Home/>
    <Download/>
    </div> */}
   

   <Counter/>
    </div>
  );
  

  }
  
}

  


export default App;
