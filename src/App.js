import logo from './logo.svg';
import './App.css';
import './Styles/Styles.css'
import Sample from './Day_1/Sample'
import JoinUs from './Day_1/JoinUs'
import { Component } from 'react';
import Setting from './Day_1/Setting';
import Login from './Day_1/Login';
import ContactUs from './Day_1/ContactUs';

class App extends Component {
  render ()
  {
  return (
    <div>
    <Sample/>

    
    <div id="tags"> <JoinUs/>
    <Setting/>
    <Login/>
    <ContactUs/>
    </div>
   
    </div>
  );
  

  }
  
}

  


export default App;
