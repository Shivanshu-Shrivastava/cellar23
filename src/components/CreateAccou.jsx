import React, { useEffect, useState } from 'react'
import './../css/Home.css'
import { Box } from '@mui/material'
import { TextField, Button } from '@mui/material'
function CreateAccou() {
    function getloca() {
        let list = localStorage.getItem('list')
        if (list) {
            return JSON.parse(list)
        }
        return []
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [list, setList] = useState(getloca())

    useEffect(() => {
        if (list) {
            localStorage.setItem('list', JSON.stringify(list))

        }
    }, [list])


    function submit(e) {
        e.preventDefault()
        var passlist = false
        if (username != '' && password != '') {
            if (list) {
                list.map(num => {
                    if (num.pass == password) {
                        passlist = true
                        return alert('Credentials already been registered Please try again')
                    }
                })
            }
            if (!passlist) {
                setList([...list, { "user": username, "pass": password }])
                alert('Account has been created')
                window.location = '/'

            }

        } else {
            alert('Please fill the credentials')
        }
    }
    console.log(list);


    return (
        <Box className='bgImg'>
            <Box className='card shadow-lg'>
                <Box className="header">
                    <h2 className='bg-dark text-center rounded text-light py-3 '>Create Account</h2>
                </Box>
                <form onSubmit={submit} className='px-sm-0 px-md-4'>
                    <Box class="form-group">
                        <TextField required onChange={e => setUsername(e.target.value)} fullWidth required onChange={e => (setUsername(e.target.value))} id="outlined-basic" label="Username" variant="outlined" />


                    </Box>
                    <Box class="form-group">
                        <TextField type={'password'} sx={{ marginTop: 1 + 'rem', marginBottom: 1 + 'rem' }} fullWidth required onChange={e => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />


                    </Box>
                    <Button sx={{ display: 'block', width: 75 + '%', marginLeft: 'auto', marginRight: 'auto' }} type='submit' variant="contained">Create</Button>

                </form>

            </Box>
        </Box>
    )
}

export default CreateAccou
