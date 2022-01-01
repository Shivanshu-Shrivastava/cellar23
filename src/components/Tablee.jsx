import React, { useEffect, useState } from 'react'
import './../css/Home.css'
import Modall from './Modall'
import { Box, Button, Card } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Tablee() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    //    setData(localStorage.getItem(JSON.parse('parlist')))
    const list = JSON.parse(localStorage.getItem('parlist'))
    setData(list)
  }, [data])
  // console.log(data)

  return (
    <Box className='bgt p-33'>
      <Card variant="outlined" style={{ width: 'unset!important' }} className='  mx-auto '>
        <h1 className='text-center'>Add Parcel</h1>
        <Button data-toggle="modal" data-target="#exampleModal" sx={{ display: 'block', marginRight: 'auto' }} type='submit' variant="contained">Create</Button>
        

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Parcel Info</TableCell>
                <TableCell align="right">Parcel Cost</TableCell>
                <TableCell align="right">Parcel Starting Location</TableCell>
                <TableCell align="right">Parcel Ending Location</TableCell>
                <TableCell align="right">Sender Name)</TableCell>
                <TableCell align="right">Address</TableCell>

                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Reciever Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((num) => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">
                    {num.painfo}
                  </TableCell>
                  <TableCell align="right">{num.pacost}</TableCell>
                  <TableCell align="right">{num.pastloc}</TableCell>
                  <TableCell align="right">{num.paendlo}</TableCell>
                  <TableCell align="right">{num.sennam}</TableCell>
                  <TableCell align="right">{num.address}</TableCell>
                  <TableCell align="right">{num.phone}</TableCell>
                  <TableCell align="right">{num.recena}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modall />
      </Card>
    </Box>
  )
}

export default Tablee
