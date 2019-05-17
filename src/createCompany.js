import React, { Component } from 'react';
import { create } from './components/create';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      homepage_url: '',
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
  handleClick() {
    console.log('this is:', this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    create(this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
export default Create;