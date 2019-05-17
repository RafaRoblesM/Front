import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../components/Input';
import Form from '../components/Form';

export default ({}) =>

<Form onSubmit={this.handleSubmit}>
<Input
  name="name"
  onChange={this.handleChange}
  placeholder="name"
  value={name}
/>
<Input
  name="homepage_url"
  onChange={this.handleChange}
  placeholder="homepage_url"
  value={homepage_url}
/>
<Input
  name="Products"
  onChange={this.handleChange}
  placeholder="Products"
  value={products}
/>
<p>{homepage_url}</p>
<Link to={'/'}>Atrás</Link>
<Button>Submit</Button>
</Form>
