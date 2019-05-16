import React from 'react'



export default ({companies}) =>
    <table className="w3-table-all w3-hoverable">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>url</th>
      </tr>
    </thead>
    <tbody>
      {companies.map(company => 
          <tr>
            <td>{company._id}</td>
            <td>{company.name}</td>
            <td>{company.homepage_url}</td>
            <td><button className="w3-button w3-green" >Mostrar</button></td>
            <td><button className="w3-button w3-yellow">Editar</button></td>
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
