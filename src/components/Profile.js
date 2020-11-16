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
        id_board_games: 0,
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
        board_games: 0,
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
    }

    componentDidMount() {
        this.activitiesData();
    }

    activitiesData = async () => {
        const res = await axios.get(`http://api-savingtheword.azurewebsites.net/api/actividadesAlumno/alumno/${localStorage.getItem('IdUsuario')}`)
        this.setState(
            {
                id_tv: res.data.data[0].Id_Actividad_Alumno,
                id_series_movies: res.data.data[1].Id_Actividad_Alumno,
                id_homework: res.data.data[2].Id_Actividad_Alumno,
                id_study: res.data.data[3].Id_Actividad_Alumno,
                id_reading: res.data.data[4].Id_Actividad_Alumno,
                id_play_videogames: res.data.data[5].Id_Actividad_Alumno,
                id_board_games: res.data.data[6].Id_Actividad_Alumno,
                id_excersise: res.data.data[7].Id_Actividad_Alumno,
                id_physical_games: res.data.data[8].Id_Actividad_Alumno,
                id_non_physical_games: res.data.data[9].Id_Actividad_Alumno,
                id_social_networks: res.data.data[10].Id_Actividad_Alumno,
                id_art_activities: res.data.data[11].Id_Actividad_Alumno,
                tv: res.data.data[0].Tiempo,
                series_movies: res.data.data[1].Tiempo,
                homework: res.data.data[2].Tiempo,
                study: res.data.data[3].Tiempo,
                reading: res.data.data[4].Tiempo,
                play_videogames: res.data.data[5].Tiempo,
                board_games: res.data.data[6].Tiempo,
                excersise: res.data.data[7].Tiempo,
                physical_games: res.data.data[8].Tiempo,
                non_physical_games: res.data.data[9].Tiempo,
                social_networks: res.data.data[10].Tiempo,
                art_activities: res.data.data[11].Tiempo,
            }
        );
        console.log(this.state);
        this.studentData();
    }

    studentData = async () => {
        const res = await axios.get('http://api-savingtheword.azurewebsites.net/api/alumnos/'+localStorage.getItem('IdUsuario'));
        this.setState({
            user_id: localStorage.getItem('IdUsuario'),
            user_name: res.data.data.Nombre+' '+res.data.data.A_Paterno+' '+res.data.data.A_Materno,
            user_age: res.data.data.Edad,
            user_grade: res.data.data.Grado,
            user_gender: (res.data.data.Genero)?'Hombre':'Mujer',
        })
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
                        <MenuItem value={0}>Menos de 1 hora</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={0}>Menos de 1 hora</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={0}>Menos de 1 hora</MenuItem>
                        <MenuItem value={1}>1 hora</MenuItem>
                        <MenuItem value={2}>2 horas</MenuItem>
                        <MenuItem value={3}>3 horas</MenuItem>
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
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
                        <MenuItem value={4}>4 o más horas</MenuItem>
                    </Select>
                    <FormHelperText>Actividades artísticas</FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    submitUserInfo = (e) => {
        e.preventDefault();
        this.submitActivities();
        alert('Datos actualizados con éxito.');
    }

    submitActivities = async () => {
        await axios.put('http://api-savingtheword.azurewebsites.net/api/actividadesAlumno', {
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
                    idActividadAlumno: this.state.id_board_games,
                    tiempo: this.state.board_games,
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
                        <h1 className="cover-heading">Datos de estudiante</h1>
                        <p className="lead">Nombre: {this.state.user_name}.</p>
                        <p className="lead">Edad: {this.state.user_age} años.</p>
                        <p className="lead">Género: {this.state.user_gender}.</p>
                        <p className="lead">Grado: {this.state.user_grade}º de primaria.</p>
                        <h1 className="cover-heading">Registro de actividades</h1>
                        <p className="lead">Para realizar un mejor seguimiento requerimos conocer el tiempo que el alumno invierte en ciertas actividades clave que afectan su educación</p>
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
                                Actualizar actividades
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