import React from 'react'
import './book.css'
import bgimg from '../../static/images/img4.webp'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Book_Appointment = () => {

    const {register, handleSubmit, reset} = useForm()

    const navigate = useNavigate()

    const saveData = async (alldata) => {

        await axios.post("http://localhost:8888/appointments", alldata)

        alert("Data Saved")

        reset()

        navigate('/dash')

    }


    return (
        <div>
            <section className="vh-100 bg-image" style={{ backgroundImage: bgimg }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={handleSubmit(saveData)}>
                                            <div className='row'>
                                                <div data-mdb-input-init className="form-outline mb-4 col-6">
                                                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" {...register('name')}/>
                                                    <label className="form-label" for="form3Example1cg">Doctor Name</label>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4 col-6">
                                                    <input type="text" id="form3Example3cg" className="form-control form-control-lg" {...register('fees')}/>
                                                    <label className="form-label" for="form3Example3cg">Consultancy Fees</label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div data-mdb-input-init className="form-outline mb-4 col-6">
                                                    <input type="date" id="form3Example1cg" className="form-control form-control-lg" {...register('date')}/>
                                                    <label className="form-label" for="form3Example1cg">Appointment Date</label>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4 col-6">
                                                    <input type="time" id="form3Example3cg" className="form-control form-control-lg" {...register('time')}/>
                                                    <label className="form-label" for="form3Example3cg">Appointment Time</label>
                                                </div>
                                            </div>
                                            <div className='col-6 mx-auto'>
                                            <select className='select form-control fs-5' {...register('status')}>
                                                <option value="Active">Active</option>
                                                <option value="Cancelled By You">Cancelled By You</option>
                                            </select>
                                            </div>




                                            <div className="d-flex justify-content-center mt-5">
                                                <button type="submit" data-mdb-button-init
                                                    data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>


                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Book_Appointment