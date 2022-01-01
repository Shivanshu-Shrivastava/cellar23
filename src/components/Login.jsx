import { Box } from '@mui/material'
import { TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list'))

        setData(list)




    }, [])
    function submit(e) {
        e.preventDefault()
        setUsername('')
        setPassword('')
        if (data) {

            const usepass = data.find(num => num.user == username && num.pass == password)

            if (usepass) {
                alert("You'll redirect soon !Press ok")


                setTimeout(() => {
                    window.location = '/table_section'
                }, 2000);

                console.log(usepass)

            }
            else {

                alert('Please fill correct credentials')
            }
            console.log(usepass)

        }
        else {

            alert('Please fill correct credentials')

        }

    }
    return (
        <Box className='card shadow-lg'>
            <Box className="header">
                <h2 className='bg-dark text-center rounded text-light py-3 '>Login</h2>
            </Box>
            <form onSubmit={submit} className='px-sm-0 px-md-4'>

                <TextField fullWidth value={username} required onChange={e => (setUsername(e.target.value))} id="outlined-basic" label="Username" variant="outlined" />

                <TextField type={'password'} sx={{ marginTop: 1 + 'rem', marginBottom: 1 + 'rem' }} fullWidth value={password} required onChange={e => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />



                <Button sx={{ display: 'block', width: 75 + '%', marginLeft: 'auto', marginRight: 'auto' }} type='submit' variant="contained">Submit</Button>
            </form>
            <Link to='/create_account' className=' mt-2 text-center  text-muted'>Create Account</Link>
        </Box>
    )
}

export default Login
