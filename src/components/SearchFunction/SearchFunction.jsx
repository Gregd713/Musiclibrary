import React, { Component } from 'react';

class SearchFunction extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            song:''
         }
    }
handleChange =(event)=>{
console.log(event.target.value)
// this.setState({
//     [event.target.name]: event.target.value
// });
}
handleSubmit=(event)=>{
    event.preventDefault();
    // this.props.createNewBook(this.state)

}

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"name="song"onChange={this.handleChange}value={this.state.songs}/>
                <button type="submit">Search</button>
            </form>
         );
    }
}
 
export default SearchFunction;