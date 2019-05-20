import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Create extends Component {
  constructor(props) {
    super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state={ 
      name:'', 
      homepage_url:''
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    })
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
    
      
      <div className="w3-container">
       <h2>Create Company</h2>

          <div className="w3-card-4 w3-dark-grey" style={{"width": "20%"}}>

            <div className="w3-container w3-center">
            <form onSubmit={this.handleSubmit}><br/>
        <input 
        placeholder="name" 
        type="text" 
        value={this.state.name} 
        onChange={(ev)=>this.setState({name:ev.target.value})}/><br/><br/>

        <input 
        placeholder="homepage_url" 
        type="text" 
        value={this.state.homepage_url} 
        onChange={(ev)=>this.setState({homepage_url:ev.target.value})}/><br/><br/>  

        <button className="w3-button w3-green">Submit</button>
        <Link to={'/'} className="w3-button w3-yellow"  style={{"margin-left": "6%"}}>Atrás</Link>
      </form>
          </div>
        </div>
        </div>
    );
  }
}

export default Create;
