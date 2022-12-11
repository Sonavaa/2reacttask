import React from 'react';
import {useState} from 'react';

const HomePage = (props) => {
  const[value, setValue] = useState('');
 

    const filteredUsers = props.userList.filter(user => user.name.toLowerCase().includes(value.toLowerCase))


  const InputHandler = (e) => {
    setValue(e.target.value)
   }


  return (
    <div>
      <div className="container mt-2">
      <input onChange={InputHandler} type="text" placeholder='Search..' className='form-control w-50 mx-auto my-3'></input>
      <table className="table">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Fullname</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
    </tr>
      
  </thead>
  <tbody>
{

  props.userList.map(user =>{
    return(
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className='btn btn-danger'>Delete</button>
          </td>
      </tr>
    ) 
  })
  
}
  </tbody>
</table>
</div>
    </div>
  )
}

export default HomePage