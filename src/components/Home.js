import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      //<div className="col-12"></div>
      <body className="text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

          <main role="main" className="inner cover">
            {/* <h1 className="cover-heading">Saving The Word</h1> */}
            <img src="../img/logo.png" alt="Logo" width="75%" />
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Aqui va el footer</p>
            </div>
          </footer>
        </div>


      </body>
    )
  }
}