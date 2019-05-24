import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Create extends Component {
  constructor(props) {
    super(props);
    this.state={name:"", homepage_url:""}
  }
 
  handleSubmit(e) {
    e.preventDefault();
    fetch('https://prueba6.herokuapp.com/companies?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVmZTAxNWQxMGJlMDAwNDA1ZDU0MiIsImlhdCI6MTU1NDM4MjMzN30.vIlV2FVQ1ZJ0LibsMYdlsnrsUznWZrAAgBAd5A8jpKs',
    {method:"post",
    body:JSON.stringify({
      "name": this.state.name,
      "homepage_url": this.state.homepage_url
    }), headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    console.log(response);
    return response.json()
 })
}

  render() {
    return (
      <div className="w3-container">
       <h2>Create Company</h2>
          <div className="w3-card-4 w3-dark-grey" style={{"width": "20%"}}>
            <div className="w3-container w3-center">
            <form onSubmit={this.handleSubmit.bind(this)}><br/>
        <input 
        placeholder="name" 
        type="text" 
        value={this.state.name} 
        onChange={(even)=>this.setState({name:even.target.value})}/><br/><br/>

        <input 
        placeholder="homepage_url" 
        type="text" 
        value={this.state.homepage_url} 
        onChange={(even)=>this.setState({homepage_url:even.target.value})}/><br/><br/>  

        <button className="w3-button w3-green" type="submit">Submit</button>
        <Link to={'/'} className="w3-button w3-yellow"  style={{"margin-left": "6%"}}>Atrás</Link>
      </form>
          </div>
        </div>
        </div>
    );
  }
}

export default Create;
