import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/shortlogo.png'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="../img/logo.png" alt="Logo" width="70%"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse sticky-top" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="navbar-brand" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="navbar-brand" to="/login">
                                    Iniciar Sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/signin">
                                    Registrarse
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/play">
                                    Juega Ahora
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/download">
                                    Descargar
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
