import React,{Component} from 'react';
import axios from "axios";
import "./SongViewer.css";
import Search from '../SearchFunction/SearchFunction';

class  SongViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        this.fetchSongs();
    }
     async fetchSongs(){
         try{
             let response = await axios.get("http://localhost:5000/api/songs")
             console.log(response.data)
             this.setState({
                users: response.data
             })
         } catch(error){
            console.log(error)
         }
     }


    //  .filter((user)=>{if(searchTerm==""){return user}
    //     else if(user.toLowerCase().includes(searchTerm.toLowerCase())){return user}})
    render() { 

        let renderedSongs=this.state.users.map((user)=>{
    return(
        <tr>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.album}</td>
            <td>{user.artist}</td>
            <td>{user.genre}</td>
            <td>{user.releaseDate}</td>
        </tr>
    )
    })
    // onChange={event=>{setSearchTerm(event.target.value)}}
        return ( 
            <div className="container-fluid2">
            <div className="search">
            <input type="text" placeholder="Search..."  />
            </div>
            <table>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
            </tr>
            {renderedSongs}
            </table>
            {/* <h7>{this.state.users.length>0 ?( this.state.users.map((user)=>{
             return <p>{user.title}</p>;})
            ):(<h2>Loading</h2>)}</h7> */}
            </div>
         );
    }
}
 
export default SongViewer;