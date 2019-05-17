import React from 'react'
import {Link} from 'react-router-dom'
export default ({companies}) =>
    <table className="w3-table-all w3-hoverable">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>url</th>
        <td><Link to={'/'} className="w3-button w3-yellow">Atrás</Link></td>
      </tr>
    </thead>
    <tbody>
      {companies.map(company => 
          <tr>
            <td>{company._id}</td>
            <td>{company.name}</td>
            <td>{company.homepage_url}</td>
          </tr>)
         }
    </tbody>
  </table>
  
  


