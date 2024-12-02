import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {

    const loader = useLoaderData()
    const [users,setUsers] = useState(loader)
    const handleDelete = (id)=>{
       
        fetch(`http://localhost:5000/userInfo/${id}`,{
            method:'delete'
        })
        .then(data=>{
          const remain =   users.filter(data=> data._id !== id);
          setUsers(remain)
        })
    }
  
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>userName</th>
        <th>Email</th>
        <th>address</th>
        <th>crateAt</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map(userInfo =>   <tr key={userInfo._id}>
            <th>1</th>
            <td>{userInfo.userName}</td>
            <td>{userInfo.email}</td>
            <td>{userInfo.address}</td>
            <td>{userInfo.crateAt}</td>
            <td><button onClick={()=>handleDelete(userInfo._id)} className='btn btn-warning'>X</button></td>
          </tr>)
    }
      
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default User;