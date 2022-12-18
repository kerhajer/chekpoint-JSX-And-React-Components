import './css/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navv.js" ;
import React from "react";
import Heading from "./components/heading";
import List from "./components/List.js";
import { Profile} from "./components/profilephoto"
import Learning from './components/Learning';
function App() {
  return (
    <div className='containerr'>
      <Nav className='nn'/>
      <Profile />
      <Heading />
      <hr/>
      <Learning/>
      <List />
      
    </div>
  );
}

export default App;