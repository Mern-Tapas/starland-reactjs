import React from 'react'
import { TextField } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { useState } from 'react'
import { Button } from '@mui/material'

function EnForm() {



    return (
        <>
            <div className='p-3 rounded shadow m-auto' style={{ width: "470px", height: "600px" }}>
                <div className='w-100 p-2 d-flex flex-column h-100'>
                    <h5 className='text-center'>Admission form</h5>
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Student Name" variant="outlined" />
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Father Name" variant="outlined" />
                    <Select className="mb-3" fullWidth label="class" variant='outlined'>
                        <MenuItem value={"Car Loan"}>Car Loan</MenuItem>
                        <MenuItem value={"Business Loan"}>Business Loan</MenuItem>
                        <MenuItem value={"Personal Loan"}>Personal Loan</MenuItem>
                        <MenuItem value={"Home Loan"}>Home Loan</MenuItem>
                    </Select>
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Contact no" type="number" variant="outlined" />
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Email" type="email" variant="outlined" />
                    <Button variant="contained" className='py-2 mt-auto' fullWidth>Contained</Button>

                </div>
            </div>
        </>
    )
}

export default EnForm