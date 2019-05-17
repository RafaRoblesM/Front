import React from 'react'
import {Link} from 'react-router-dom'


export default ({companies}) =>

    <table className="w3-table-all w3-hoverable">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>url</th>
        <th></th>
        <th></th>
        <th><Link to={`/post`} className="w3-button w3-orange">CREATE NEW COMPANY</Link></th>
      </tr>
    </thead>
    <tbody>
      {companies.map(company => 
          <tr>
            <td>{company._id}</td>
            <td>{company.name}</td>
            <td>{company.homepage_url}</td>
            <td><Link to={`/get/${company._id}`} className="w3-button w3-green" >Mostrar</Link></td>
            <td><Link to={`/post`} className="w3-button w3-yellow">Editar</Link></td>
            <td><button onClick={()=> remove (company._id)} className="w3-button w3-red">Eliminar</button></td>
          </tr>)
         }
    </tbody>
  </table>
function remove(_id){
  return fetch(`https://prueba6.herokuapp.com/companies/${_id}?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVmZTAxNWQxMGJlMDAwNDA1ZDU0MiIsImlhdCI6MTU1NDM4MjMzN30.vIlV2FVQ1ZJ0LibsMYdlsnrsUznWZrAAgBAd5A8jpKs`,
   { method: 'DELETE'})
 .catch(err => {
    console.error(err)
  });
}
// function change(_id){
//   return(
//     <Redirect to='/Opcion1'/>
// );

// }

