import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import img_pc from '../img/download_pc.png'
import img_android from '../img/download_android.png'
import game_pc from '../downloads/STW.zip'
import game_android from '../downloads/STW.apk'

export default class Download extends Component {
  render() {
    return (
      <div allign="center" className="container">
          <div className="row">
            <div className="col">
              <br/><br/>
              <h1 className="cover-heading text-center">Descargas</h1>
            </div>
          </div>
        <br />
        <div className="row">
          <div className="col">
            <br/><br/>
            <div className="col  text-center"><img src={img_pc} alt="img_pc" width="30%"/></div>
            <br/>
            <p className="lead">Instrucciones:</p>
            <p className="lead">1) Haz clic en el botón de descarga</p>
            <p className="lead">2) Descomprime el archivo .zip con un compresor de archivos(WinRar, 7zip, etc.)</p>
            <p className="lead">3) Haz doble clic sobre el ejecutable "savingtheword.exe"</p>
            <p className="lead">4) ¡Disfruta del juego!</p>
              <a href={game_pc} style={{textDecoration:"none"}} download="SavingTheWord">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={useStyles.submit}
              >
                Descargar
              </Button>
            </a>
          </div>
          <div className="col">
            <br/><br/>
            <div className="col  text-center"><img src={img_android} alt="img_pc" width="30%"/></div>
            <br/>
            <p className="lead">Instrucciones:</p>
            <p className="lead">1) Haz clic en el botón de descarga</p>
            <p className="lead">2) Si estás desde tu móvil ejecuta el archivo SavingTheWord.apk</p>
            <p className="lead">2) Pulsa el ícono de la aplicación</p>
            <p className="lead">4) ¡Disfruta del juego!</p>
            <a href={game_android} style={{textDecoration:"none"}} download="SavingTheWord">
              <Button allign="center"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={useStyles.submit}
              >
                Descargar
              </Button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));