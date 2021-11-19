// import {useState} from 'react';
// import {fetchData} from '../AxiosCall/AxiosCall';

// const Search=()=>{
//     const response =fetchData();
//     const [searchTerm,setSearchTerm]=useState('')
//         return(
//             <div className="container-fluid2">
//             <div className="search">
//             <input type="text" placeholder="Search..." className="form-control"onChange={event=>{setSearchTerm(event.target.value)}} />
//             </div>
//             <table>
//             <thead>
//             <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Album</th>
//             <th>Artist</th>
//             {/* <th>Genre</th> */}
//             <th>Release Date</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {response.filter((val)=>{
//                     if(searchTerm===""){return true;}
//                     else if(val.id.includes(searchTerm)||val.title.toLowerCase().includes(searchTerm.toLowerCase())){return val}
//                 })
//                 .map(m=>(
//                 <tr key={m.id}>
//                     <td>{m.id}</td>
//                     <td>{m.title}</td>
//                     <td>{m.album}</td>
//                     <td>{m.artist}</td>
//                     <td>{m.genre}</td>
//                     <td>{m.releaseDate}</td>
//                 </tr>
//                 ))}
//             </tbody>
//             </table>
//             {/* <h7>{this.state.users.length>0 ?( this.state.users.map((user)=>{
//              return <p>{user.title}</p>;})
//             ):(<h2>Loading</h2>)}</h7> */}
//             </div>
//         )
// }

// export default Search;