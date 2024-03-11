import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home = () => {

	const { store, actions } = useContext(Context);

	const [agenda, setAgenda] = useState(store.agenda);

	useEffect(() => {
		setAgenda(store.agenda);
	}, [store.agenda])

	const [selectedContact, setSelectedContact] = useState(null);

	const openDeleteModal = (contact) => {
		setSelectedContact(contact);
	};

	return (
		<div>
			<div className=" bg-light">
				<div className='container '>
					<div className='row d-flex justify-content-center align-items-center'>
						<div className='col-md-6 col-xl-6'>

							<Link to="/createContact">
								<a type="button" className="btn btn-success mb-3 mt-1">New Contact</a>
							</Link>
						
							<div className="table-container" style={{ height: "600px"}}>
								<table className="table table-light mb-0 mt-3 ">
									<tbody className="table-group-divider">
										<tr>
											<th scope="row">Avatar</th>
											<th scope="row">Contact</th>
											<th scope="row"></th>
										</tr>
										{agenda.map((contact, index) => (
											<tr key={contact.id}>
												<td>
													<img src={`https://i.pravatar.cc/100?img=${index}`} width={100} alt={`Avatar ${index}`} style={{borderRadius: "5px"}}/>
												</td>
												<td>
													{contact.full_name} <br />
													{contact.email} <br />
													{contact.phone} <br />
													{contact.agenda_slug} <br />
													{contact.address}
												</td>
												<td>
													<a type="button" className="btn btn-danger mt-4" onClick={() => openDeleteModal(contact)} data-bs-toggle="modal"
														data-bs-target="#deleteModal">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  															<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  															<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
														</svg>
													</a>
													<Link to={`/editContact/${contact.id}`}>
														<a type="button" className="btn btn-warning mt-4 ms-2">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
															<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
															<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
														</svg>
														</a>
													</Link>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
								
						</div>
					</div>
				</div>
				<div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="false">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								<div className="input-group">
									<h4>Are you sure you want to delete this contact?</h4>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
									actions.deleteContact(selectedContact.id);
								}}>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Home