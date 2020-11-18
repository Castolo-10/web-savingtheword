import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import axios from 'axios'

import LoadingScreen from 'react-loading-screen'
import run from '../img/spr_run.gif'

export default class Activities extends Component {
  state = {
    user_id: localStorage.getItem('IdUsuario'),
    tv: 1,
    series_movies: 1,
    homework: 1,
    study: 1,
    reading: 1,
    play_videogames: 1,
    sleep: 5,
    excersise: 1,
    physical_games: 1,
    non_physical_games: 1,
    social_networks: 1,
    art_activities: 1,
    loading: false,
    message: '',
  }

  onChangeTv = (e) => {
    this.setState({
      tv: e.target.value
    })
  }

  onChangeSeriesMovies = (e) => {
    this.setState({
      series_movies: e.target.value
    })
  }

  onChangeHomework = (e) => {
    this.setState({
      homework: e.target.value
    })
  }

  onChangeStudy = (e) => {
    this.setState({
      study: e.target.value
    })
  }

  onChangeReading = (e) => {
    this.setState({
      reading: e.target.value
    })
  }

  onChangePlayVideogames = (e) => {
    this.setState({
      play_videogames: e.target.value
    })
  }

  onChangeSleep = (e) => {
    this.setState({
      sleep: e.target.value
    })
  }

  onChangeExcersise = (e) => {
    this.setState({
      excersise: e.target.value
    })
  }

  onChangePhysicalGames = (e) => {
    this.setState({
      physical_games: e.target.value
    })
  }

  onChangeNonPhysicalGames = (e) => {
    this.setState({
      non_physical_games: e.target.value
    })
  }

  onChangeSocialNetworks = (e) => {
    this.setState({
      social_networks: e.target.value
    })
  }

  onChangeArtActivities = (e) => {
    this.setState({
      art_activities: e.target.value
    })
  }

  showFormTv() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="tv"
            id="tv"
            value={this.state.tv}
            onChange={this.onChangeTv}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Televisión</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormSeriesMovies() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="seriesmovies"
            id="seriesmovies"
            value={this.state.series_movies}
            onChange={this.onChangeSeriesMovies}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Series y películas</FormHelperText>

        </FormControl>
      </Grid>
    )
  }

  showFormHomework() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="homework"
            id="homework"
            value={this.state.homework}
            onChange={this.onChangeHomework}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Tareas</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormStudy() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="study"
            id="study"
            value={this.state.study}
            onChange={this.onChangeStudy}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Estudiar(Repaso)</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormReading() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="reading"
            id="reading"
            value={this.state.reading}
            onChange={this.onChangeReading}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Leer</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormPlayVideogames() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="play_videogames"
            id="play_videogames"
            value={this.state.play_videogames}
            onChange={this.onChangePlayVideogames}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Videojuegos</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormSleep() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="sleep"
            id="sleep"
            value={this.state.sleep}
            onChange={this.onChangeSleep}
          >
            <MenuItem value={5}>Menos de 5 horas</MenuItem>
            <MenuItem value={6}>6 horas</MenuItem>
            <MenuItem value={7}>7 horas</MenuItem>
            <MenuItem value={8}>8 horas</MenuItem>
            <MenuItem value={9}>9 horas</MenuItem>
            <MenuItem value={10}>10 horas</MenuItem>
            <MenuItem value={11}>11 horas</MenuItem>
            <MenuItem value={12}>12 horas o más</MenuItem>
          </Select>
          <FormHelperText>Dormir</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormExcersise() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="excersise"
            id="excersise"
            value={this.state.excersise}
            onChange={this.onChangeExcersise}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Ejercicio</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormPhysicalGames() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="physical_games"
            id="physical_games"
            value={this.state.physical_games}
            onChange={this.onChangePhysicalGames}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Juegos de actividad física</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormNonPhysicalGames() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="non_physical_games"
            id="non_physical_games"
            value={this.state.non_physical_games}
            onChange={this.onChangeNonPhysicalGames}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Juegos sin actividad física</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormSocialNetworks() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="social_networks"
            id="social_networks"
            value={this.state.social_networks}
            onChange={this.onChangeSocialNetworks}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Redes sociales</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  showFormArtActivities() {
    return (
      <Grid item sm={3} xs={12}>
        <FormControl variant="outlined" className={useStyles.formControl}>
          <Select
            labelId="art_activities"
            id="art_activities"
            value={this.state.art_activities}
            onChange={this.onChangeArtActivities}
          >
            <MenuItem value={1}>1 hora o menos</MenuItem>
            <MenuItem value={2}>2 horas</MenuItem>
            <MenuItem value={3}>3 horas</MenuItem>
            <MenuItem value={4}>4 horas</MenuItem>
            <MenuItem value={5}>5 o más horas</MenuItem>
          </Select>
          <FormHelperText>Actividades artísticas</FormHelperText>
        </FormControl>
      </Grid>
    )
  }

  submitUserInfo = (e) => {
    e.preventDefault();
    this.setState({ loading: true, message:'Confirmando la cuenta...' });
    this.submitActivities();
  }

  submitActivities = async () => {
    await axios.post('https://api-savingtheword.azurewebsites.net/api/actividadesAlumno', {
      idAlumno: this.state.user_id,
      actividades: [
        {
          idActividad: 1,
          tiempo: this.state.tv,
        },
        {
          idActividad: 2,
          tiempo: this.state.series_movies,
        },
        {
          idActividad: 3,
          tiempo: this.state.homework,
        },
        {
          idActividad: 4,
          tiempo: this.state.study,
        },
        {
          idActividad: 5,
          tiempo: this.state.reading,
        },
        {
          idActividad: 6,
          tiempo: this.state.play_videogames,
        },
        {
          idActividad: 7,
          tiempo: this.state.sleep,
        },
        {
          idActividad: 8,
          tiempo: this.state.excersise,
        },
        {
          idActividad: 9,
          tiempo: this.state.physical_games,
        },
        {
          idActividad: 10,
          tiempo: this.state.non_physical_games,
        },
        {
          idActividad: 11,
          tiempo: this.state.social_networks,
        },
        {
          idActividad: 12,
          tiempo: this.state.art_activities,
        }
      ]
    })
    localStorage.setItem('confirmado', 1);
    alert('¡Cuenta confirmada con éxito!');
    window.location = 'http://localhost:3000/logout'
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
          onClick={this.submitUserInfo}
        >
          Registrar actividades
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
          logoSrc={run}
          text={this.state.message}
        >
        </LoadingScreen>
        </div>
      )
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={useStyles.paper}>
          <div align="center">
          </div>
          <main role="main" className="inner cover"><br/><br/>
            <h1 className="cover-heading">Registro de actividades</h1><br/>
            <p className="lead">Para realizar un mejor seguimiento del rendimiento académico del jugador necesitamos conocer el promedio de horas diarias invertidas en las siguientes actividades:</p>
          </main>
          <div>
            <br /><br/>
            <form className={useStyles.form} noValidate>
              <Grid container spacing={2}>
                {this.showFormTv()}
                {this.showFormSeriesMovies()}
                {this.showFormHomework()}
                {this.showFormStudy()}
                {this.showFormReading()}
                {this.showFormPlayVideogames()}
                {this.showFormSleep()}
                {this.showFormExcersise()}
                {this.showFormPhysicalGames()}
                {this.showFormNonPhysicalGames()}
                {this.showFormSocialNetworks()}
                {this.showFormArtActivities()}
              </Grid>
              <br />
              {this.showButton()}
              <Grid container justify="flex-end">

              </Grid>
            </form>
          </div>
        </div>
      </Container>
    )
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));