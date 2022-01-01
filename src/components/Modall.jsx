import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Box } from '@mui/material'
import { TextField, Button } from '@mui/material'


function Modall() {
    function getloca(){
        let list =localStorage.getItem('parlist')
        if (list){
            return JSON.parse(list)
        }
        return []
    }
   

    const [parcelinfo, setParcelinfo] = useState('')
    const [parcelcost, setParcelcost] = useState('')
    const [parcelstloca, setParcelstloca] = useState('')
    const [parcelenloca, setParcelenloca] = useState('')
    const [senderna, setSenderna] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [recena, setRecena] = useState('')

    const [parlist, setParlist] = useState(getloca())
    useEffect(() => {
        if(parlist){
       localStorage.setItem('parlist',JSON.stringify(parlist))

        }
    }, [parlist])
   
    function submit(e) {
        e.preventDefault()
        setParlist([...parlist,{"painfo":parcelinfo,"pacost":parcelcost,"pastloc":parcelstloca,"paendlo":parcelenloca,"sennam":senderna,"address":address,"phone":phone,"recena":recena}])
        alert('Parcel Added')



     
    }
    return (
        <Box className="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <Box className="modal-dialog modal-lg" role="document">
                <Box className="modal-content">
                    <Box className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Box>
                    <Box className="modal-body">
                        <form onSubmit={submit}>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Parcel Info</label>
                                <input required onChange={e => setParcelinfo(e.target.value)} name="coustomer_name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Parcel Cost</label>
                                <input required onChange={e => setParcelcost(e.target.value)} name='mobile' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Parcel Starting location</label>
                                <input required onChange={e => setParcelstloca(e.target.value)} name='text' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Parcel Ending location</label>
                                <input onChange={e => setParcelenloca(e.target.value)} name='address' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Sender Name</label>
                                <input required onChange={e => setSenderna(e.target.value)} name='product_id' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Address</label>
                                <input required onChange={e => setAddress(e.target.value)} name='product_name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Phone</label>
                                <input required onChange={e => setPhone(e.target.value)} name='price' type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>
                            <Box className="form-group">
                                <label for="exampleInputEmail1">Receiver Name</label>
                                <input required onChange={e => setRecena(e.target.value)} name='dele_date' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </Box>

                            <Box className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-dark">Create</button>
                            </Box>
                        </form>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Modall
