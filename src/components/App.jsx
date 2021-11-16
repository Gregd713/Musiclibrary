import React,{Component} from 'react';
import './App.css'
import axios from "axios";
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SongViewer from './SongViewer/SongViewer';

 class App extends Component {
     constructor(props) {
         super(props);
         this.state = {  
             users: [],
         }
     }

     render() { 
         return (
             <div className="container-fluid">
                 <NavBar/>
                 <SongViewer/>
                 <Footer/>
             </div>
           );
     }
 }
  
 export default App;