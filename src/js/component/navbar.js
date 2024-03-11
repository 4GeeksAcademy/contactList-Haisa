import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<Link className="text-decoration-none text-white me-2" to={"/"}>
							<li className="nav-item">
								<span href="#">Listar Contactos</span>
							</li>
						</Link>

						<Link className="text-decoration-none text-white" to={"/create-contact"}>
							<li className="nav-item">
								<span href="#">Crear Contacto</span>
							</li>
						</Link>

					</ul>
				</div>
			</div>
		</nav>
	);
};
