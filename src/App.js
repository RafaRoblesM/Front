import React, { Component }  from 'react';
import Table from './components/table.js';

class App extends Component {
     constructor(props) {
      super(props);
      this.state = {
        droplets: []
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
    fetch('http://localhost:3000/api/droplets')
    .then(res => res.json())
    .then(json => json.droplets)
    .then(droplets => this.setState({ 'droplets': droplets }))
  }
}

export default App;