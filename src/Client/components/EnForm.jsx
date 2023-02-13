import React from 'react'
import { TextField } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { Button } from '@mui/material'

function EnForm() {



    return (
        <>
            <div className='p-3 rounded shadow m-auto' style={{ width: "400px", height: "500px" }}>
                <div className='w-100 p-2 d-flex flex-column h-100'>
                    <h5 className='text-center'>Admission form</h5>
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Student Name" variant="outlined" />
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Father Name" variant="outlined" />
                    <Select className="mb-3" fullWidth label="name" variant='outlined'>
                        <MenuItem value={"1st"}>1st</MenuItem>
                        <MenuItem value={"2nd"}>2nd</MenuItem>
                        <MenuItem value={"3rd"}>3rd</MenuItem>
                        <MenuItem value={"4th"}>4th</MenuItem>
                        <MenuItem value={"5th"}>5th</MenuItem>
                        <MenuItem value={"6th"}>6th</MenuItem>
                        <MenuItem value={"7th"}>7th</MenuItem>
                        <MenuItem value={"8th"}>8th</MenuItem>
                        <MenuItem value={"9th"}>9th</MenuItem>
                    </Select>
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Contact no" type="number" variant="outlined" />
                    <TextField className='mb-3' id="outlined-select" fullWidth label="Email" type="email" variant="outlined" />
                    <Button variant="contained" className='py-2 mt-auto' fullWidth>Submit</Button>

                </div>
            </div>
        </>
    )
}

export default EnForm