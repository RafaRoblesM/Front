import React, { Component }  from 'react';
import Table from './components/getOneTable';

class more extends Component {
    constructor(props) {
      super(props);
      this.state = {
        companies: [],
      }
    }
  componentDidMount({match}){
    this.setState({
       isLoading: true
      })
    fetch('https://prueba6.herokuapp.com/companies/' +match.params._id + '?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVmZTAxNWQxMGJlMDAwNDA1ZDU0MiIsImlhdCI6MTU1NDM4MjMzN30.vIlV2FVQ1ZJ0LibsMYdlsnrsUznWZrAAgBAd5A8jpKs')
    .then(response => {
      console.log(response);
      return response.json()
   })
    .then(companies => {
      this.setState({'companies': companies.rows})
  })
    
   }
   render() {
    return (
      <div className="tabla">
        <Table company={this.state.companies}/>
       {console.log(this.state.companies)
       }
      </div>
    );
  }
}
export default more;