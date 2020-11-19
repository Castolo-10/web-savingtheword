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

export default class Calculator extends Component {
  state = {
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
    result1: '',
    result2: '',
    loading: false,
  }

  submited = false;

  componentDidMount() {
    this.activitiesData();
  }

  activitiesData = async () => {
    await this.setState(
      {
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
        result1: localStorage.getItem('result1'),
      }
    );
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
            <MenuItem value={5}>5 horas o menos</MenuItem>
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
    this.setState({ loading: true });
    this.submitActivities();
  }

  submitActivities = async () => {
    const res = await axios.post('https://api-savingtheword.azurewebsites.net/api/calculadora/', {
      actividad1: this.state.tv,
      actividad2: this.state.series_movies,
      actividad3: this.state.homework,
      actividad4: this.state.study,
      actividad5: this.state.reading,
      actividad6: this.state.play_videogames,
      actividad7: this.state.sleep,
      actividad8: this.state.excersise,
      actividad9: this.state.physical_games,
      actividad10: this.state.non_physical_games,
      actividad11: this.state.social_networks,
      actividad12: this.state.art_activities,
    })
    this.setState({
      result2: Number.parseFloat(res.data.data.nivel * 100).toFixed(2),
    })
    this.submited = true;
    this.setState({ loading: false });
  }

  showResult() {
    if (this.submited) {
      return (
        <h1 className="cover-heading">Nivel calculado: {this.state.result2}%</h1>
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
          onClick={this.submitUserInfo}
        >
          Calcular
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

  render() {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={useStyles.paper}>
          <div align="center">
          </div>
          <main role="main" className="inner cover"><br/><br/>
            <h1 className="cover-heading">Calculadora de nivel de lectura.</h1><br/>
            <p className="lead">Aquí puedes modificar los tiempos invertidos en cada actividad y consultar si estos cambios en la rutina semanal pueden ofrecer un mejor resultado:</p>
            <br/><p className="lead">Tu nivel actual estimado: {this.state.result1}%</p><br/><br/>
          </main>
          <div>
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
              <br/><br/>
              <div>
                {this.showButton()}
              </div>
            </form>
            <br />
            <Grid container justify="center">
              {this.showResult()}
            </Grid>
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