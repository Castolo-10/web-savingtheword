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

import LoadingScreen from 'react-loading-screen'

import spr_attack from '../img/spr_attack.gif'
import spr_axe from '../img/spr_axe.gif'
import spr_carry from '../img/spr_carry.gif'
import spr_dig from '../img/spr_dig.gif'
import spr_doing from '../img/spr_doing.gif'
import spr_hammering from '../img/spr_hammering.gif'
import spr_idle from '../img/spr_idle.gif'
import spr_jump from '../img/spr_jump.gif'
import spr_mining from '../img/spr_mining.gif'
import spr_reeling from '../img/spr_reeling.gif'
import spr_roll from '../img/spr_roll.gif'
import spr_run from '../img/spr_run.gif'
import spr_walking from '../img/spr_walking.gif'
import spr_watering from '../img/spr_watering.gif'

var regex = {
  "mail": /\S+@\S+\.\S+/
};

var regexErrors = {
  "mail": "El formato del correo no es válido.",
};

export default class Login extends Component {

  mail_form = true;
  load_image = null;

  state = {
    mail: '',
    password: '',
    loading: false,
    message: ''
  }

selectLoadImage(){
  switch(Math.floor((Math.random()*15))){
    case 0:
      return spr_attack;
      case 1:
      return spr_axe;
      case 2:
      return spr_carry;
      case 3:
      return spr_dig;
      case 4:
      return spr_doing;
      case 5:
      return spr_hammering;
      case 6:
      return spr_idle;
      case 7:
      return spr_jump;
      case 8:
      return spr_mining;
      case 9:
      return spr_reeling;
      case 10:
      return spr_roll;
      case 11:
      return spr_run;
      case 12:
      return spr_walking;
      case 13:
      return spr_watering;
      default:
      return spr_idle;
  }
}

  secondsToTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - (minutes * 60));
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
    this.load_image = this.selectLoadImage();
    //Aqui llamamos al post de usuario
    this.setState({ loading: true, message: 'Iniciando sesión'});
    if (this.validateForm() === true) {
      const res = await axios.post('https://api-savingtheword.azurewebsites.net/api/juego/login', {
        correo: this.state.mail,
        clave: this.state.password,
      }
      )

      if (res.data.result !== 0) {
        localStorage.setItem('IdUsuario', res.data.data.id);
        localStorage.setItem('confirmado', res.data.data.confirmado);
        if (res.data.data.confirmado === 1) {
          this.setState({message: 'Recuperando información del usuario...'})
          this.getActivitiesInfo();
        } else {
          window.location = "http://localhost:3000/"
        }
      }
      else if (res.data.result === 0) {
        document.getElementById('password').value = "";
        this.setState({ loading: false });
        alert("Correo o contraseña incorrectos.")
      }
    } else {
      this.setState({ loading: false });
    }
  }

  getUserInfo = async () => {
    const res = await axios.get('https://api-savingtheword.azurewebsites.net/api/alumnos/' + localStorage.getItem('IdUsuario'));
    localStorage.setItem('user_name', res.data.data.Nombre + ' ' + res.data.data.A_Paterno + ' ' + res.data.data.A_Materno);
    localStorage.setItem('user_age', res.data.data.Edad);
    localStorage.setItem('user_grade', res.data.data.Grado);
    localStorage.setItem('user_gender', (res.data.data.Genero) ? 'Hombre' : 'Mujer');
    if (res.data.data.TiempoTotal > 0) {
      localStorage.setItem('game_data', 1);
      localStorage.setItem('game_time', this.secondsToTime(res.data.data.TiempoTotal));
      localStorage.setItem('game_errors', res.data.data.Errores);
      localStorage.setItem('game_level', (res.data.data.Promedio) ? 'Medio alto' : 'Medio bajo');
    } else {
      localStorage.setItem('game_data', 0);
    }
    this.obtainFirstResultCalculator();
  }

  getActivitiesInfo = async () => {
    const res = await axios.get(`https://api-savingtheword.azurewebsites.net/api/actividadesAlumno/alumno/${localStorage.getItem('IdUsuario')}`)
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

    this.getUserInfo();
  }

  obtainFirstResultCalculator = async () => {
    const res = await axios.post('https://api-savingtheword.azurewebsites.net/api/calculadora/', {
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
    localStorage.setItem('result1', Number.parseFloat(res.data.data.nivel * 100).toFixed(2));
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

  showButton() {
    if (!this.state.loading) {
      return (
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
    } else {
      return (
        <div>
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
        <LoadingScreen
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#9ee5f8'
          textColor='#676767'
          logoSrc={this.load_image}
          text={this.state.message}
        >
        </LoadingScreen>
        </div>
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