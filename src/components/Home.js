import React, { Component } from 'react'

export default class Home extends Component {

  render() {
    return (
      
      <div className="col-12 text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main role="main" className="inner cover">
            <img src="../img/logo.png" alt="Logo" width="75%" />
            <p className="lead" justification="center">Bienvenido! Saving The Word es un juego en el que puedes poner a prueba y mejorar tus habilidades de lectura.</p>
          </main>

          
        </div>

        <footer className="mastfoot mt-auto sticky-bottom">
            <div className="inner">
              <p>Aqui va el footer</p>
            </div>
          </footer>
      </div>
    )
  }
}