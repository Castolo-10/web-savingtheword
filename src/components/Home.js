import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png'
import img_1 from '../img/Screenshot_1.png'
import img_2 from '../img/Screenshot_2.png'
import img_3 from '../img/Screenshot_3.png'
import img_4 from '../img/Screenshot_4.png'

export default class Home extends Component {

  render() {
    return (

      <div className="col-12">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main role="main" className="inner cover">
            <br /><br />
            <img src={logo} alt="Logo" width="100%" />
            <br /><br /><br />
          </main>
          <div className="col">
            <h2 className="cover-heading">Saving The Word es un juego serio para desarrollar habilidades de comprensión lectora</h2>
            <img src={img_1} alt="img_1" width="100%" />
            <br /><br /><br />
            <div className="row">
              <div className="col-md-5">
              <br /><br /><br /><br/><br/>
                <h3 className="cover-heading" style={{textAlign:'right' }}>Interactúa con los habitantes de WordTown.</h3>
              </div>
              <div className="col">
                <img src={img_2} alt="img_2" width="100%" />
              </div>
            </div>
            <br /><br /><br />
            <div className="row">
              <div className="col">
              <img src={img_3} alt="img_3" width="100%" />
              </div>
              <div className="col-md-5">
              <br /><br /><br /><br/><br/>
              <h3 className="cover-heading" style={{textAlign:'left' }}>Recolecta objetos e intercámbialos por recompensas.</h3>
              </div>
            </div>
            <br /><br /><br />
            <div className="text-center">
            <h3 className="cover-heading">Encuentra todas las palabras y úsalas para completar las páginas destrozadas. </h3>
            <img src={img_4} alt="img_4" width="70%"/>
            </div>
          </div>
        </div>

        <footer className="mastfoot mt-auto sticky-bottom">
          <div className="inner">
            <br /><br />
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" to="/">
                Saving The Word
      </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </div>
        </footer>
      </div>
    )
  }
}