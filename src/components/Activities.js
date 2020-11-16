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
        user_id: localStorage.getItem('IdUsuario'),
        tv: 0,
        series_movies: 0,
        homework: 0,
        study: 0,
        reading: 0,
        play_videogames: 0,
        board_games: 0,
        excersise: 0,
        physical_games: 0,
        non_physical_games: 0,
        social_networks: 0,
        art_activities: 0,
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

    onChangeBoardGames = (e) => {
        this.setState({
            board_games: e.target.value
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
                    </Select>
                    <FormHelperText>Videojuegos</FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    showFormBoardGames() {
        return (
            <Grid item sm={3} xs={12}>
                <FormControl variant="outlined" className={useStyles.formControl}>
                    <Select
                        labelId="board_games"
                        id="board_games"
                        value={this.state.board_games}
                        onChange={this.onChangeBoardGames}
                    >
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
                    </Select>
                    <FormHelperText>Juegos de mesa</FormHelperText>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
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
                        <MenuItem value={0}>N/A</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 Horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 horas</MenuItem>
                        <MenuItem value={5}>5 horas</MenuItem>
                        <MenuItem value={6}>6 horas</MenuItem>
                        <MenuItem value={7}>7 horas</MenuItem>
                        <MenuItem value={8}>8 horas</MenuItem>
                        <MenuItem value={9}>9 horas</MenuItem>
                        <MenuItem value={10}>10 horas</MenuItem>
                        <MenuItem value={11}>11 horas</MenuItem>
                        <MenuItem value={12}>12 horas</MenuItem>
                    </Select>
                    <FormHelperText>Actividades artísticas</FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    submitUserInfo = (e) =>{
        e.preventDefault();
        this.submitActivities();
        alert('Cuenta confirmada con éxito.');
        window.location = 'http://localhost:3000/logout'
    }

    submitActivities = async () => {
        await axios.post('http://localhost:4000/api/actividadesAlumno',{
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
                    tiempo: this.state.board_games,
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
    }

    submitTimeTv = () =>{
         const res = axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 1,
            idAlumno: this.state.user_id,
            tiempo: this.state.tv,
        })
        console.log(res);
    }

    submitTimeSeriesMovies = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 2,
            idAlumno: this.state.user_id,
            tiempo: this.state.series_movies,
        })
        console.log('insertado');
    }

    submitTimeHomework = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 3,
            idAlumno: this.state.user_id,
            tiempo: this.state.homework,
        })
        console.log('insertado');
    }

    submitTimeStudy = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 4,
            idAlumno: this.state.user_id,
            tiempo: this.state.study,
        })
        console.log('insertado');
    }

    submitTimeReading = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 5,
            idAlumno: this.state.user_id,
            tiempo: this.state.reading,
        })
        console.log('insertado');
    }

    submitTimePlayVideogames = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 6,
            idAlumno: this.state.user_id,
            tiempo: this.state.play_videogames,
        })
        console.log('insertado');
    }

    submitTimeBoardGames = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 7,
            idAlumno: this.state.user_id,
            tiempo: this.state.board_games,
        })
        console.log('insertado');
    }

    submitTimeExcersise = () =>{
        axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 8,
            idAlumno: this.state.user_id,
            tiempo: this.state.excersise,
        })
        console.log('insertado');
    }

    submitTimePhysicalGames = () =>{
        axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 9,
            idAlumno: this.state.user_id,
            tiempo: this.state.physical_games,
        })
        console.log('insertado');
    }

    submitTimeNonPhysicalgames = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 10,
            idAlumno: this.state.user_id,
            tiempo: this.state.non_physical_games,
        })
        console.log('insertado');
    }

    submitTimeSocialNetworks = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 11,
            idAlumno: this.state.user_id,
            tiempo: this.state.social_networks,
        })
        console.log('insertado');
    }

    submitTimeArtActivities = () =>{
         axios.post('http://localhost:4000/api/actividadesAlumno',{
            idActividad: 12,
            idAlumno: this.state.user_id,
            tiempo: this.state.art_activities,
        })
        console.log('insertado');
    }

    render() {
        return (
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={useStyles.paper}>
                    <div align="center">
                    </div>
                    <br />
                    <main role="main" className="inner cover">
                        <h1 className="cover-heading">Registro de actividades</h1>
                        <p className="lead">Para llevar a cabo un mejor seguimiento requerimos conocer el tiempo que el alumno invierte en ciertas actividades clave que afectan su educación</p>
                        <p className="lead">
                        </p>
                    </main>
                    <div>
                        <br />
                        <form className={useStyles.form} noValidate>
                            <Grid container spacing={2}>
                                {this.showFormTv()}
                                {this.showFormSeriesMovies()}
                                {this.showFormHomework()}
                                {this.showFormStudy()}
                                {this.showFormReading()}
                                {this.showFormPlayVideogames()}
                                {this.showFormBoardGames()}
                                {this.showFormExcersise()}
                                {this.showFormPhysicalGames()}
                                {this.showFormNonPhysicalGames()}
                                {this.showFormSocialNetworks()}
                                {this.showFormArtActivities()}
                            </Grid>
                            <br />
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