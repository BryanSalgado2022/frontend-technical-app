import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Technical Test
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className=''>
                <Link className="btn btn-outline-light" to="/">
                Añadir empresa
                </Link>
                <Link className="btn btn-outline-light" to="/HomeProduct">
                    Añadir Producto
                </Link>
                <Link className="btn btn-outline-light" to="HomeStock">
                    Registrar inventario
                </Link>
            </div>
          
        </div>
      </nav>
    </div>
  )
}
