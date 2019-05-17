import React, { Component }  from 'react';
import Table from './components/getOneTable';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        companies: [],
      }
    }
  componentDidMount(_id){
    this.setState({
       isLoading: true
      })
    fetch(`https://prueba6.herokuapp.com/companies/${_id}?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVmZTAxNWQxMGJlMDAwNDA1ZDU0MiIsImlhdCI6MTU1NDM4MjMzN30.vIlV2FVQ1ZJ0LibsMYdlsnrsUznWZrAAgBAd5A8jpKs`)
    .then(response => {
      console.log(response);
      return response.json()
   })
    .then(companies => {
      console.log(companies);
      this.setState({'companies': companies.rows})
  })
    .catch(error => this.setState({
       error: null, 
       isLoading: false
    }))
   }
   render() {
    return (
      <div className="tabla">
        <Table companies={this.state.companies}/>
      </div>
    );
  }
}
export default App;