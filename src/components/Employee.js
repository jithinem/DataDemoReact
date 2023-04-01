import React from 'react'
import './Employee.css'

function Employee() {
    const Employee=[
        {'Username':'John','Designation':'Developer'},
        {'Username':'Anu','Designation':'Tester'},
        {'Username':'Litty','Designation':'HR'},
        {'Username':'Sarin','Designation':'Designer'}
    ]
  return (
    <div>
        {
            Employee.map(item=>(
                <div style={{display:'flex',marginLeft:'20px'}}>
                    <h4 className='username'>Username:{item.Username} </h4>
                    <h4 className='designation' style={{marginLeft:'20px'}}>Designation:{item.Designation}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default Employee