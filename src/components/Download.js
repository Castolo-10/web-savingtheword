import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import moduleName from '../../download/test'

export default class Download extends Component {
    render() {
        return (<div allign="center">
            <div className="col-md-12">
                <h1 className="cover-heading">Descarga</h1>
                        <p className="lead">Pasos a seguir para jugar a Saving The Word en tu computadora:</p>
                        <p className="lead">   1) Haz clic en el botón de descarga.</p>
                        <p className="lead">   2) Descomprime el archivo .zip con un compresor de archivos(WinRar, 7zip, etc.).</p>
                        <p className="lead">   3) Haz doble clic sobre el ejecutable "savingtheword.exe"</p>
                        <p className="lead">   4) ¡Disfruta del juego!</p>
                        
            </div>
            <div className="col-md-6">
            <a href="src\img\test.jpg" download="test.jpg">
            
            <Button allign="center"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={useStyles.submit}
                            >
                                Descargar
                            </Button></a></div>
                            </div>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));