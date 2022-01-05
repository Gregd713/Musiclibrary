import React,{Component} from 'react';
import './App.css'
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SongViewer from './SongViewer/SongViewer';
import CreateSong from './AddSong/AddSong';



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
                 <CreateSong/>
                 <Footer/>   
             </div>
           );
     }
 }
  
 export default App;