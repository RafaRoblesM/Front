import React from 'react'
const Table = ({ companies }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { (companies.length > 0) ? companies.map( (company, index) => {
             return (
              <tr key={ index }>
                <td>{ company._id }</td>
                <td>{ company.name }</td>
                <td>{ company.homepage_url}</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }
export default Table;