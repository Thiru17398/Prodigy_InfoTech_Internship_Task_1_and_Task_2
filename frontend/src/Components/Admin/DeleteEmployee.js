import React, { useState } from 'react';
import { TextField } from '@mui/material';
import  {Button} from '@mui/material';
import axios from 'axios';


const DeleteEmployee = () => {

  const [employeeId , setEmployeeId] = useState("");

  const deleteEmployee = async (data) => {
    var response;
    setEmployeeId("");
      await axios.post('http://localhost:5000/admin/deleteEmployee',{employeeId:employeeId})
      .then(res => response = res).catch(e => response = e);
      if(response.statusText === 'OK'){
        alert(response.data.message);
      }


  }

  return (
    <div className='m-10'>
    <h1 className='text-3xl font-semibold text-center'>Delete Employee</h1>
    <div className='border-1 border-black'>
        <div className='mt-10 grid'>
              <TextField
              id="filled-textarea"
              label="Employee Id"
              value={employeeId}
              onChange={e => setEmployeeId(e.target.value)}
              placeholder="Enter  Employee Id"
              multiline
              variant="filled"
              sx={{width:"40%",margin:"20px auto"}}
              />
              <Button variant="contained" sx={{width:"20%",margin:"10px auto"}} onClick={deleteEmployee}>Delete</Button>
          </div>
    </div>

    </div>
  )
}

export default DeleteEmployee