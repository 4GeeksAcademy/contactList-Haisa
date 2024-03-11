import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const CreateContact = (props) => {
    const {store, actions} = useContext(Context)
    const [contact, setcontact] = useState({});
    
    const handleChange = (e)=> {
        setcontact({...contact, [e.target.name]:e.target.value})
        
    }

    const navigate = useNavigate();

    return (
        <>
        <h1 className='text-center'> Nuevo contacto</h1>

        <div className='container bg-light rounded'>

            <form className="row">

                <div className="text">
                    <label htmlFor="full_name" className="form-label">Nombre Completo</label>
                    <input name='full_name' required type="text"  className="form-control" id="full_name" onChange={handleChange}/>
                </div>

                <div className="text">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name='email' required type="email" className="form-control" id="email" onChange={handleChange}/>
                </div>

                <div className="text">
                    <label htmlFor="address" className="form-label">Direccion</label>
                    <input name='address' required type="text" className="form-control" id="address" onChange={handleChange}/>
                </div>
                
                <div className=" text">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input name='phone' required type="tel" className="form-control" id="phone" onChange={handleChange}/>
                </div>

            
                <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-success" onClick={()=>{
                        actions.createContact(contact)
                        navigate("/")
                    }}>Register</button>
                </div>

            </form>
        </div>
        </>
    )
}

export default CreateContact