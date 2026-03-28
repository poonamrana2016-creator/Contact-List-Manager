import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Addcontact = () => {

    const initialState = {
        name: '',
        number: '',
        email: '',
    };

    const initialErr = {
        nameErr: '',
        numberErr: '',
        emailErr: '',
    };

    const [formValue, setFormValue] = useState(initialState);
    const [formErr, setFormErr] = useState({});
    console.log(formValue);

    const handleFormChange = (e) => {
        console.log(e);
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
        setFormErr({
            ...formValue,
            [name]: ''
        });

    }

    const validate = () => {
        let errors = {};

        if (formValue.name === '') {
            errors.nameErr = 'Enter contact name!';
        }

        if (formValue.number === '') {
            errors.numberErr = 'Enter phone number!';
        }
        else if (!/^[0-9]{10}$/.test(formValue.number)) {
            errors.numberErr = 'Enter digits only!';
        }
        if (formValue.email === '') {
            errors.emailErr = 'Enter email!';
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValue.email)) {
            errors.emailErr = 'Enter a valid email!';
        }

        setFormErr(errors);
        return Object.keys(errors).length === 0;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert('Contact Added Successfully');
            setFormValue(initialState);
            setFormErr({});
        }
    }


    return (
        <>
            <div className={`container  dashboard_bg  `} style={{ height: '100vh', alignItems: 'center' }} >

                <div className="row py-5 g-0 justify-content-center  ">

                    <div className="col-lg-5 py-4 ">
                        <div className="card p-4  phone-frame ">

                            <h3 className='text-primary text-center mb-4 '>ADD NEW CONTACT</h3>
                            <form autoComplete='off' action={''} onSubmit={handleSubmit} >
                                <div className='mb-3'>
                                    <label className='form-label '>Name: </label>
                                    <input onChange={handleFormChange} name='name' value={formValue.name} className='form-control' placeholder='Enter Name' />
                                    {
                                        formErr.nameErr &&
                                        <span className='text-danger'> {formErr.nameErr} </span>
                                    }
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label '>Number: </label>
                                    <input onChange={handleFormChange} name='number' value={formValue.number} className='form-control' type='tel' placeholder='Enter Number' />
                                    {
                                        formErr.numberErr &&
                                        <span className='text-danger'> {formErr.numberErr} </span>
                                    }
                                </div>
                                <div className='mb-4'>
                                    <label className='form-label '>Email: </label>
                                    <input onChange={handleFormChange} name='email' value={formValue.email} className='form-control' type='email' placeholder='Enter Email' />
                                    {
                                        formErr.emailErr &&
                                        <span className='text-danger'> {formErr.emailErr} </span>
                                    }
                                </div>
                                <div className='mb-4  '>
                                    <button className='btn btn-success w-100 ' type='submit' >Save as contact</button>
                                </div>
                                <Link to={'/'}>
                                    <div className='mb-3  '>
                                        <button className='btn btn-outline-primary w-100 ' type='submit' >View Contact List</button>
                                    </div>
                                </Link>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Addcontact