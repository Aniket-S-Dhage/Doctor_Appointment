import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const doc_apps = await axios.get("http://localhost:8888/appointments/")

        console.log(doc_apps.data)

        setData(doc_apps.data)

    }


    useEffect(() => {
        getData()
    }, [])


    const cancle = async (id) => {

        await axios.patch(`http://localhost:8888/appointments/${id}`, { "status": "Cancelled by You" })

        getData()

    }




    return (
        <div className='m-5'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Consultancy Fees</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Current Status</th>
                        <th>Action</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dp, index) => {
                            return (
                                <tr key={index}>
                                    <td>{dp.name}</td>
                                    <td>{dp.fees}</td>
                                    <td>{dp.date}</td>
                                    <td>{dp.time}</td>
                                    <td>{dp.status}</td>
                                    <td>
                                        {dp.status === "Active" ? 
                                        <button className='btn btn-primary' onClick={() => { cancle(dp.id) }}>Cancel</button> : "Cancelled"    
                                    }
                                        
                                    </td>
                                    <td>
                                        <NavLink to={`/up/${dp.id}`}><button className='btn btn-danger'>Update</button></NavLink>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <NavLink to={'/reg'}>
                <button className='btn btn-success'>ADD</button>
            </NavLink>

        </div>
    )
}

export default Dashboard