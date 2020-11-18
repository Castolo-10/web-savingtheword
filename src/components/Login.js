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
    loading: false,
  }

  secondsToTime(time){
    var minutes = Math.floor(time/60);
    var seconds = Math.floor(time - (minutes*60));
    var string = minutes + ' minutos y ' + seconds + ' segundos.'
    return string;
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
    this.setState({loading: true});
    if (this.validateForm() === true) {
      const res = await axios.post('http://api-savingtheword.azurewebsites.net/api/juego/login', {
        correo: this.state.mail,
        clave: this.state.password,
      }
      )

      if (res.data.result !== 0) {
        localStorage.setItem('IdUsuario', res.data.data.id);
        localStorage.setItem('confirmado', res.data.data.confirmado);
        console.log('Login realizado');
        if(res.data.data.confirmado === 1){
          this.getActivitiesInfo();
        }else{
          alert("Inicio de sesión exitoso.");
        window.location = "http://localhost:3000/"
        }
      }
      else if (res.data.result === 0) {
        alert("Correo o contraseña incorrectos.")
        document.getElementById('password').value="";
        this.setState({loading: false});
      }
    } else{
      this.setState({loading: false});
    }
  }

  getUserInfo = async () => {
    const res = await axios.get('http://api-savingtheword.azurewebsites.net/api/alumnos/'+localStorage.getItem('IdUsuario'));
      localStorage.setItem('user_name', res.data.data.Nombre+' '+res.data.data.A_Paterno+' '+res.data.data.A_Materno);
      localStorage.setItem('user_age', res.data.data.Edad);
      localStorage.setItem('user_grade', res.data.data.Grado);
      localStorage.setItem('user_gender', (res.data.data.Genero)?'Hombre':'Mujer');
      console.log('informacion guardada');
      if(res.data.data.TiempoTotal > 0){
        localStorage.setItem('game_data', 1);
        localStorage.setItem('game_time', this.secondsToTime(res.data.data.TiempoTotal));
        localStorage.setItem('game_errors', res.data.data.Errores);
        localStorage.setItem('game_level', (res.data.data.Promedio)?'Medio alto':'Medio bajo');
        console.log('Datos de juego guardados');
      } else{
        localStorage.setItem('game_data', 0);
      }
      this.obtainFirstResultCalculator();
  }

  getActivitiesInfo= async () => {
      const res = await axios.get(`http://api-savingtheword.azurewebsites.net/api/actividadesAlumno/alumno/${localStorage.getItem('IdUsuario')}`)
      localStorage.setItem('id_tv', res.data.data[0].Id_Actividad_Alumno);
      localStorage.setItem('id_series_movies', res.data.data[1].Id_Actividad_Alumno);
      localStorage.setItem('id_id_homework', res.data.data[2].Id_Actividad_Alumno);
      localStorage.setItem('id_study', res.data.data[3].Id_Actividad_Alumno);
      localStorage.setItem('id_reading', res.data.data[4].Id_Actividad_Alumno);
      localStorage.setItem('id_play_videogames', res.data.data[5].Id_Actividad_Alumno);
      localStorage.setItem('id_sleep', res.data.data[6].Id_Actividad_Alumno);
      localStorage.setItem('id_excersise', res.data.data[7].Id_Actividad_Alumno);
      localStorage.setItem('id_physical_games', res.data.data[8].Id_Actividad_Alumno);
      localStorage.setItem('id_non_physical_games', res.data.data[9].Id_Actividad_Alumno);
      localStorage.setItem('id_social_networks', res.data.data[10].Id_Actividad_Alumno);
      localStorage.setItem('id_art_activities', res.data.data[11].Id_Actividad_Alumno);

      localStorage.setItem('tv', res.data.data[0].Tiempo);
      localStorage.setItem('series_movies', res.data.data[1].Tiempo);
      localStorage.setItem('homework', res.data.data[2].Tiempo);
      localStorage.setItem('study', res.data.data[3].Tiempo);
      localStorage.setItem('reading', res.data.data[4].Tiempo);
      localStorage.setItem('play_videogames', res.data.data[5].Tiempo);
      localStorage.setItem('sleep', res.data.data[6].Tiempo);
      localStorage.setItem('excersise', res.data.data[7].Tiempo);
      localStorage.setItem('physical_games', res.data.data[8].Tiempo);
      localStorage.setItem('non_physical_games', res.data.data[9].Tiempo);
      localStorage.setItem('social_networks', res.data.data[10].Tiempo);
      localStorage.setItem('art_activities', res.data.data[11].Tiempo);

      console.log('actividades guardadas');
      this.getUserInfo();
}

  obtainFirstResultCalculator = async () => {
  const res = await axios.post('http://api-savingtheword.azurewebsites.net/api/calculadora/', {
      actividad1: localStorage.getItem('tv'),
      actividad2: localStorage.getItem('series_movies'),
      actividad3: localStorage.getItem('homework'),
      actividad4: localStorage.getItem('study'),
      actividad5: localStorage.getItem('reading'),
      actividad6: localStorage.getItem('play_videogames'),
      actividad7: localStorage.getItem('sleep'),
      actividad8: localStorage.getItem('excersise'),
      actividad9: localStorage.getItem('physical_games'),
      actividad10: localStorage.getItem('non_physical_games'),
      actividad11: localStorage.getItem('social_networks'),
      actividad12: localStorage.getItem('art_activities'),
  })
      localStorage.setItem('result1', Number.parseFloat(res.data.data.nivel*100).toFixed(2));
      console.log('calculado primer resultado IA');

      alert("Inicio de sesión exitoso.");
        window.location = "http://localhost:3000/"
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

  showButton(){
    if(!this.state.loading){
      return(
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
      )
    } else{
      return(
        <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled
                  color="primary"
                  className={useStyles.submit}
                >
                  Cargando...
              </Button>
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
              {this.showButton()}
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