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

export default class Activities extends Component {
  state = {
    id_tv: 0,
    id_series_movies: 0,
    id_homework: 0,
    id_study: 0,
    id_reading: 0,
    id_play_videogames: 0,
    id_sleep: 0,
    id_excersise: 0,
    id_physical_games: 0,
    id_non_physical_games: 0,
    id_social_networks: 0,
    id_art_activities: 0,
    tv: 0,
    series_movies: 0,
    homework: 0,
    study: 0,
    reading: 0,
    play_videogames: 0,
    sleep: 5,
    excersise: 0,
    physical_games: 0,
    non_physical_games: 0,
    social_networks: 0,
    art_activities: 0,
    user_id: 0,
    user_name: '',
    user_age: 0,
    user_gender: '',
    user_grade: 0,
    game_data: 0,
    game_time: '',
    game_errors: 0,
    game_level: '',
    loading: false,
  }

  componentDidMount() {
    this.setState({
      game_data: localStorage.getItem('game_data'),
      game_time: localStorage.getItem('game_time'),
      game_errors: localStorage.getItem('game_errors'),
      game_level: localStorage.getItem('game_level'),
    })
    this.activitiesData();
  }

  activitiesData = async () => {
    await this.setState(
      {
        id_tv: localStorage.getItem('id_tv'),
        id_series_movies: localStorage.getItem('id_series_movies'),
        id_homework: localStorage.getItem('id_homework'),
        id_study: localStorage.getItem('id_study'),
        id_reading: localStorage.getItem('id_reading'),
        id_play_videogames: localStorage.getItem('id_play_videogames'),
        id_sleep: localStorage.getItem('id_sleep'),
        id_excersise: localStorage.getItem('id_excersise'),
        id_physical_games: localStorage.getItem('id_physical_games'),
        id_non_physical_games: localStorage.getItem('id_non_physical_games'),
        id_social_networks: localStorage.getItem('id_social_networks'),
        id_art_activities: localStorage.getItem('id_art_activities'),
        tv: localStorage.getItem('tv'),
        series_movies: localStorage.getItem('series_movies'),
        homework: localStorage.getItem('homework'),
        study: localStorage.getItem('study'),
        reading: localStorage.getItem('reading'),
        play_videogames: localStorage.getItem('play_videogames'),
        sleep: localStorage.getItem('sleep'),
        excersise: localStorage.getItem('excersise'),
        physical_games: localStorage.getItem('physical_games'),
        non_physical_games: localStorage.getItem('non_physical_games'),
        social_networks: localStorage.getItem('social_networks'),
        art_activities: localStorage.getItem('art_activities'),
        user_id: localStorage.getItem('IdUsuario'),
        user_name: localStorage.getItem('user_name'),
        user_age: localStorage.getItem('user_age'),
        user_grade: localStorage.getItem('user_grade'),
        user_gender: localStorage.getItem('user_gender'),
      }
    );
    console.log('carga info perfil');
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
            <MenuItem value={0}>Menos de 1 hora</MenuItem>
            <MenuItem value={1}>1 hora</MenuItem>
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
    this.setState({ loading: true });
    this.submitActivities();
  }

  submitActivities = async () => {
    const res = await axios.put('http://api-savingtheword.azurewebsites.net/api/actividadesAlumno', {
      actividades: [
        {
          idActividadAlumno: this.state.id_tv,
          tiempo: this.state.tv,
        },
        {
          idActividadAlumno: this.state.id_series_movies,
          tiempo: this.state.series_movies,
        },
        {
          idActividadAlumno: this.state.id_homework,
          tiempo: this.state.homework,
        },
        {
          idActividadAlumno: this.state.id_study,
          tiempo: this.state.study,
        },
        {
          idActividadAlumno: this.state.id_reading,
          tiempo: this.state.reading,
        },
        {
          idActividadAlumno: this.state.id_play_videogames,
          tiempo: this.state.play_videogames,
        },
        {
          idActividadAlumno: this.state.id_sleep,
          tiempo: this.state.sleep,
        },
        {
          idActividadAlumno: this.state.id_excersise,
          tiempo: this.state.excersise,
        },
        {
          idActividadAlumno: this.state.id_physical_games,
          tiempo: this.state.physical_games,
        },
        {
          idActividadAlumno: this.state.id_non_physical_games,
          tiempo: this.state.non_physical_games,
        },
        {
          idActividadAlumno: this.state.id_social_networks,
          tiempo: this.state.social_networks,
        },
        {
          idActividadAlumno: this.state.id_art_activities,
          tiempo: this.state.art_activities,
        }
      ]
    })
    if (res.data.result === 1) {
      localStorage.setItem('tv', this.state.tv);
      localStorage.setItem('series_movies', this.state.series_movies);
      localStorage.setItem('homework', this.state.homework);
      localStorage.setItem('study', this.state.study);
      localStorage.setItem('reading', this.state.reading);
      localStorage.setItem('play_videogames', this.state.play_videogames);
      localStorage.setItem('sleep', this.state.sleep);
      localStorage.setItem('excersise', this.state.excersise);
      localStorage.setItem('physical_games', this.state.physical_games);
      localStorage.setItem('non_physical_games', this.state.non_physical_games);
      localStorage.setItem('social_networks', this.state.social_networks);
      localStorage.setItem('art_activities', this.state.art_activities);
      console.log('datos actualizados');
      this.obtainFirstResultCalculator();
    } else {
      alert('Algo salió mal, no se han realizado cambios.');
      this.setState({ loading: false });
    }
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
    localStorage.setItem('result1', Number.parseFloat(res.data.data.nivel * 100).toFixed(2));
    console.log('recalculado primer resultado IA');
    alert('Datos actualizados con éxito.');
    this.setState({ loading: false });
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
          Actualizar información
        </Button>
      )
    } else {
      return (
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

  showGameStats() {
    if (this.state.game_data === "1") {
      return (
        <div>
          <h1 className="cover-heading">Datos de juego(última partida jugada)</h1><br />
          <p className="lead">Tiempo de partida: {this.state.game_time}</p>
          <p className="lead">Número de errores: {this.state.game_errors}</p>
          <p className="lead">Nivel de partida: {this.state.game_level}</p><br /><br />
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={useStyles.paper}>
          <div align="center">
          </div>
          <main role="main" className="inner cover"><br /><br />
            <h1 className="cover-heading">Datos de estudiante</h1><br />
            <p className="lead">Nombre: {this.state.user_name}.</p>
            <p className="lead">Edad: {this.state.user_age} años.</p>
            <p className="lead">Género: {this.state.user_gender}.</p>
            <p className="lead">Grado: {this.state.user_grade}º de primaria.</p>
            <br /><br />
            {this.showGameStats()}
            <h1 className="cover-heading">Registro de actividades</h1><br />
            <p className="lead">Para realizar un mejor seguimiento requerimos conocer el tiempo que el alumno invierte en ciertas actividades clave que afectan su educación</p>
          </main>
          <div>
            <br /><br />
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
              <div>
                {this.showButton()}
              </div>
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