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
          { (companies.length > 0) ? companies.map( (companies, index) => {
             return (
              <tr key={ index }>
                <td>{ companies._id }</td>
                <td>{ companies.name }</td>
                <td>{ companies.homepage_url}</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }
export default Table;