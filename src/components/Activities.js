import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import axios from 'axios'

export default class Activities extends Component {
    state = {
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
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
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                    </Select>
                    <FormHelperText>Actividades artísticas</FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    render() {
        return (
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={useStyles.paper}>
                    <div align="center">
                        <Avatar className={useStyles.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </div>
                    <br />
                    <Typography component="h1" variant="h5" align="center">
                        Registrarse
                    </Typography>
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
                                <Grid item>
                                    <br />
                                    <Link to="/login" variant="body2">
                                        ¿Ya tienes una cuenta? Iniciar sesión
              </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
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