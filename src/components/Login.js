import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios'

var regex = {
  "mail": /\S+@\S+\.\S+/
};

var regexErrors = {
  "mail": "El formato del correo no es válido.",
};

export default class Login extends Component {

  mail_form = true;

  state = {
    mail: '',
    password: '',
  }

  onChangeMail = (e) => {
    this.setState({
      mail: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  validateForm() {
    //Evaluamos todos los campos del formulario, si uno solo falla no hace post del registro, se ponen en serie para que muestre los errores si hay mas de uno.

    var v1 = this.validate('mail');
    this.mail_form = v1;
    return v1;
  }

  validate(element) {
    // Preparacion
    var reg = new RegExp(regex[element]);
    var val;

    if (element === 'mail') {
      val = this.state.mail;
    }

    if (!reg.test(val)) {
      return false;
    } else {
      return true;
    }
  }

  onSubmitData = async (e) => {
    e.preventDefault()
    //Aqui llamamos al post de usuario
    if (this.validateForm() === true) {
      const res = await axios.post('http://localhost:4000/api/juego/login', {
        correo: this.state.mail,
        clave: this.state.password,
      }
      )

      if (res.data.result !== 0) {
        localStorage.setItem('IdUsuario', res.data.data.id)
        alert("Inicio de sesión exitoso.");
        window.location = "http://localhost:3000/"
      }
      else if (res.data.result === 0) {
        alert("Correo o contraseña incorrectos.")
      }
    }
    this.forceUpdate();
  }

  ShowFormMail() {
    if (this.mail_form === true) {
      return (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={this.onChangeMail}
        />
      )
    } else {
      return (
        <TextField
          error
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          helperText={regexErrors['mail']}
          onChange={this.onChangeMail}
        />
      )
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper} align="center">
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <br />
          <Typography component="h1" variant="h5" align="center">
            Iniciar Sesión
          </Typography>
          <form className={useStyles.form} noValidate>
            {this.ShowFormMail()}
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onChangePassword}
              />
            </div>
            <br />
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={useStyles.submit}
                onClick={this.onSubmitData}
              >
                Iniciar sesión
            </Button>
            </div>
            <br />
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" to="/">
              Saving The Word
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));