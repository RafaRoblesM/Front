import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Create extends Component {
  constructor(props) {
    super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state={ name:"", homepage_url:""} 
    }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://prueba6.herokuapp.com/companies?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVmZTAxNWQxMGJlMDAwNDA1ZDU0MiIsImlhdCI6MTU1NDM4MjMzN30.vIlV2FVQ1ZJ0LibsMYdlsnrsUznWZrAAgBAd5A8jpKs`,
    {method:"POST"})
    .then(response => {
      return response.json()
   })
  }

  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <input 
        placeholder="name" 
        type="text" 
        value={this.state.name} 
        onChange={(ev)=>this.setState({name:ev.target.value})}/>

        <input 
        placeholder="homepage_url" 
        type="text" 
        value={this.state.homepage_url} 
        onChange={(ev)=>this.setState({homepage_url:ev.target.value})}/>   

        <button>Submit</button>
        <Link to={'/'}>Atrás</Link>
      </form>
    );
  }
}

export default Create;
