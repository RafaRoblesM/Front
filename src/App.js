import React, { Component }  from 'react';
import Table from './components/table.js';

class App extends Component {
     constructor(props) {
      super(props);
      this.state = {
        company: []
      }
    }
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
  componentDidMount() {
    fetch('https://prueba6.herokuapp.com/companies')
    .then(res => res.json())
    .then(json => json.company)
    .then(company => this.setState({ 'company': company }))
  }
}

export default App;