import React, { Component }  from 'react';
import Table from './components/getOneTable';

class more extends Component {
    constructor(props) {
      super(props);
      this.state = {
        company: [],
      }
    }
  componentDidMount(){
   const _id= this.props.match.params.id
    fetch('https://prueba6.herokuapp.com/companies/'+ _id +'?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVmZTAxNWQxMGJlMDAwNDA1ZDU0MiIsImlhdCI6MTU1NDM4MjMzN30.vIlV2FVQ1ZJ0LibsMYdlsnrsUznWZrAAgBAd5A8jpKs')
    .then(response => {
      console.log(response);
      return response.json()
   })
    .then(company => {
      console.log(company);
      this.setState({'company': [company]})
  })
    
   }
   render() {
    return (
      <div className="tabla">
        <Table company={this.state.company}/>
       {console.log(this.state.company)
       }
      </div>
    );
  }
}
export default more;