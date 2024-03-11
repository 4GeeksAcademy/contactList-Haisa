import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";


const EditContact = () => {

    const params = useParams();

    useEffect( () =>{
        actions.getContactoById(params.id)
    }, []);

    const { store, actions } = useContext(Context);

    const [contact, setContact] = useState([]);
    console.log(contact);

    useEffect(() => {
        console.log(contact)
        setContact(store.contactEdit);
    }, [store.contactEdit])

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })

    }

    return (
        <>
            <h1 className='text-center mt-3'> Editar contacto</h1>

            <div className='container bg-dark rounded'>

                <form className="row g-3 mt-5">

                    <div className="col-md-6 text-white">
                        <label htmlFor="full_name" className="form-label">Nombre Completo</label>
                        <input name='full_name' required type="text" className="form-control" id="full_name" onChange={handleChange} value={contact.full_name} />
                    </div>

                    <div className="col-md-6 text-white">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name='email' required type="email" className="form-control" id="email" onChange={handleChange} value={contact.email} />
                    </div>

                    <div className="col-6 text-white">
                        <label htmlFor="address" className="form-label">Direccion</label>
                        <input name='address' required type="text" className="form-control" id="address" onChange={handleChange} value={contact.address} />
                    </div>

                    <div className="col-md-6 text-white">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input name='phone' required type="tel" className="form-control" id="phone" onChange={handleChange} value={contact.phone} />
                    </div>


                    <div className="col-12 mb-3">
                        <button type="submit" className="btn btn-primary" onClick={() => { actions.editContact(contact) }}>Editar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default EditContact