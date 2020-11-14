import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/shortlogo.png'

export default class Navigation extends Component {

    isLogged() {
        var local = localStorage.getItem('IdUsuario');
        return (local !== null && local > 0) ? true : false;
    }

    ShowLogin() {
        if (this.isLogged()) {
            return (
                <Link className="navbar-brand" to="/profile">
                    Perfil
                </Link>
            )
        } else {
            return (
                <Link className="navbar-brand" to="/login">
                    Iniciar sesión
                </Link>
            )
        }
    }

    ShowSignin() {
        if (this.isLogged()) {
            return (
                <Link className="navbar-brand" to="/logout">
                    Cerrar sesión
                </Link>
            )
        }
        else {
            return (
                <Link className="navbar-brand" to="/signin">
                    Registrarse
                </Link>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={img} alt="Logo" width="100%" />
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
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/play">
                                    Juega ahora
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/download">
                                    Descargar
                                </Link>
                            </li>
                            <li className="nav-item" >
                                {this.ShowLogin()}
                            </li>
                            <li className="nav-item">
                                {this.ShowSignin()}
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
