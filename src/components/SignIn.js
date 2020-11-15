import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import axios from 'axios'

import AutoLogIn from './AutoLogIn'

var regex = {
  "name": /^[a-zA-Z0-9., ]{3,40}$/,
  "lastname": /^[a-zA-Z0-9., ]{3,40}$/,
  "lastname2": /^[a-zA-Z0-9., ]{3,40}$/,
  // eslint-disable-next-line
  "password": /^[a-zA-Z0-9_ !"#$%&'()*+,-./:;<=>?@^`{|}~\[/\]/\\/]{6,18}$/,
  // eslint-disable-next-line
  "mail": /\S+@\S+\.\S+/
};

var regexErrors = {
  // eslint-disable-next-line
  "password": "La longitud de la contraseña debe ser de 6 a 18 caracteres (Permite mayúsculas, minúsculas, números y los siguientes caracteres: (espacio) ! \"\ # $ % & '( ) * + , - . / : ; < = > ? @ [ \\\ ] ^ _` { | } ~).",
  "mail": "El formato del correo no es válido.",
  "name": "El nombre debe tener entre 3 y 40 letras.",
  "lastname": "El apellido paterno debe tener entre 3 y 40 letras.",
  "lastname2": "El apellido materno debe tener entre 3 y 40 letras.",
  "confirm_password": "Las contraseñas no coinciden."
};

export default class Signin extends Component {

  name_form = true;
  lastname_form = true;
  lastname_form2 = true;
  age_form = true;
  gender_form = true;
  grade_form = true;
  mail_form = true;
  password_form = true;
  confirm_password_form = true;
  existing_mail = false;

  user_id = 0;

  state = {
    name: '',
    lastname: '',
    lastname2: '',
    age: -1,
    gender: -1,
    grade: 0,
    mail: '',
    password: '',
    confirm_password: '',
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onChangeLastName = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeLastName2 = (e) => {
    this.setState({
      lastname2: e.target.value
    })
  }

  onChangeAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeGrade = (e) => {
    this.setState({
      grade: e.target.value
    })
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

  onChangeConfirmPassword = (e) => {
    this.setState({
      confirm_password: e.target.value
    })
  }

  validateForm() {
    //Evaluamos todos los campos del formulario, si uno solo falla no hace post del registro, se ponen en serie para que muestre los errores si hay mas de uno.

    var v1 = this.validate('name');
    var v2 = this.validate('lastname');
    var v3 = this.validate('mail');
    var v4 = this.validate('password');
    var v5 = this.validate('confirm_password');

    var v6 = this.validateCombo('age');
    var v7 = this.validateCombo('gender');
    var v8 = this.validateCombo('grade');

    this.name_form = v1;
    this.lastname_form = v2;
    this.mail_form = v3;
    this.password_form = v4;
    this.confirm_password_form = v5;

    this.age_form = v6;
    this.gender_form = v7;
    this.grade_form = v8;

    if (v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8) {
      return true;
    }
    else {
      document.getElementById("confirm_password").value = "";
      this.setState({ confirm_password: '' });
      return false;
    }
  }

  onSubmitData = async (e) => {
      e.preventDefault()
      document.getElementById("register-btn").disabled=true;
      this.existing_mail = false;
      if(this.validateForm()){
          console.log('entra if validateForm');
          console.log(this.state);
          const res = await axios.post('http://api-savingtheword.azurewebsites.net/api/usuarios',{
            correo: this.state.mail,
            clave: this.state.password,
            nombre: this.state.name,
            aPaterno: this.state.lastname,
            aMaterno: this.state.lastname2,
            edad: this.state.age,
            grado: this.state.grade,
            genero: this.state.gender,
          })
          console.log(res);
          if (res.data.result !== 0) {
            this.existing_mail = false;
            console.log('registrado');
          }
          else if (res.data.result === 0) {
            this.existing_mail = true;
            this.mail_form = false;
            document.getElementById("confirm_password").value = "";
            this.setState({ confirm_password: '' });
            console.log('no registrado')
            this.forceUpdate();
          }
        AutoLogIn(this.state.mail, this.state.password);
      }
      this.forceUpdate();
    }

    

  validate(element) {
    // Preparacion
    var reg = new RegExp(regex[element]);
    var val;

    if (element === 'name') {
      val = this.state.name;
    }

    if (element === 'lastname') {
      val = this.state.lastname;
    }

    if (element === 'lastname2') {
      val = this.state.lastname2;
    }

    if (element === 'mail') {
      val = this.state.mail;
    }

    if (element === 'password') {
      val = this.state.password;
    }

    if (element === 'confirm_password') {
      if (this.state.password === this.state.confirm_password) {
        return true;
      }
      else {
        return false;
      }
    }

    if (!reg.test(val)) {
      return false;
    } else {
      return true;
    }
  }

  validateCombo(element){
    if(element === 'age'){
      return (this.state.age > 4)? true:false;
    }

    if(element === 'gender'){
      return(this.state.gender > -1)?true:false;
    }

    if(element === 'grade'){
      return(this.state.grade>0)?true:false;
    }
  }

  ShowFormName() {
    if (this.name_form === true) {
      return (
        <Grid item xs={12}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Nombre(s)"
            autoFocus
            onChange={this.onChangeName}
          />
        </Grid>
      )
    }
    else {
      return (
        <Grid item xs={12}>
          <TextField
            error
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Nombre(s)"
            helperText={regexErrors['name']}
            onChange={this.onChangeName}
          />
        </Grid>
      )
    }
  }

  ShowFormLastName() {
    if (this.lastname_form === true) {
      return (
        <Grid item xs={6} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Apellido paterno"
            name="lastName"
            autoComplete="lname"
            onChange={this.onChangeLastName}
          />
        </Grid>
      )
    } else {
      return (
        <Grid item xs={6} sm={6}>
          <TextField
            error
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Apellido paterno"
            name="lastName"
            autoComplete="lname"
            helperText={regexErrors['lastname']}
            onChange={this.onChangeLastName}
          />
        </Grid>
      )
    }
  }

  ShowFormLastName2() {
    if (this.lastname_form === true) {
      return (
        <Grid item xs={6} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName2"
            label="Apellido materno"
            name="lastName2"
            autoComplete="lname2"
            onChange={this.onChangeLastName}
          />
        </Grid>
      )
    } else {
      return (
        <Grid item xs={6} sm={6}>
          <TextField
            error
            variant="outlined"
            required
            fullWidth
            id="lastName2"
            label="Apellido materno"
            name="lastName2"
            autoComplete="lname2"
            helperText={regexErrors['lastname']}
            onChange={this.onChangeLastName}
          />
        </Grid>
      )
    }
  }

  ShowFormAge(){
    if(this.age_form === true){
      return(
        <Grid item sm={4}>
          <FormControl variant="outlined" className={useStyles.formControl}>
          <FormHelperText>Edad</FormHelperText>
          <Select 
          labelId="age"
          id="age"
          value={this.state.age}
          onChange={this.onChangeAge}
        >
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
          <MenuItem value={16}>Otra</MenuItem>
        </Select>
        </FormControl>
        </Grid>
      )
    }
    else{
      return(
          <Grid item sm={4} className={useStyles.form}>
            <FormControl variant="outlined" className={useStyles.formControl} error>
            <FormHelperText>Edad</FormHelperText>
        <Select
          labelId="age"
          id="age"
          value={this.state.age}
          onChange={this.onChangeAge}
        >
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
          <MenuItem value={16}>Otra</MenuItem>
        </Select>
        <FormHelperText>Selecciona una opción</FormHelperText>
        </FormControl>
        </Grid>
      )
    }
  }

  ShowFormGender(){
    if(this.gender_form === true){
      return(
        <Grid item sm={4}>
          <FormControl variant="outlined" className={useStyles.formControl}>
          <FormHelperText>Género</FormHelperText>
      <Select
          labelId="gender"
          id="gender"
          value={this.state.gender}
          onChange={this.onChangeGender}
        >
          <MenuItem value={0}>Mujer</MenuItem>
          <MenuItem value={1}>Hombre</MenuItem>
        </Select>
        </FormControl>
        </Grid>
      )
    }
    else{
      return(
          <Grid item sm={4} className={useStyles.form}>
            <FormControl variant="outlined" className={useStyles.formControl} error>
            <FormHelperText>Género</FormHelperText>
        <Select
          labelId="gender"
          id="gender"
          value={this.state.gender}
          placeholder="Género"
          onChange={this.onChangeGender}
        >
          <MenuItem value={0}>Mujer</MenuItem>
          <MenuItem value={1}>Hombre</MenuItem>
        </Select>
        <FormHelperText>Selecciona una opción</FormHelperText>
        </FormControl>
        </Grid>
      )
    }
  }

  ShowFormGrade(){
    if(this.grade_form === true){
      return(
        <Grid item sm={4}>
          <FormControl variant="outlined" className={useStyles.formControl}>
          <FormHelperText>Grado</FormHelperText>
      <Select
          labelId="grade"
          id="grade"
          value={this.state.grade}
          onChange={this.onChangeGrade}
        >
          <MenuItem value={1}>1º</MenuItem>
          <MenuItem value={2}>2º</MenuItem>
          <MenuItem value={3}>3º</MenuItem>
          <MenuItem value={4}>4º</MenuItem>
          <MenuItem value={5}>5º</MenuItem>
          <MenuItem value={6}>6º</MenuItem>
        </Select>
        </FormControl>
        </Grid>
      )
    } else{
      return(
        <Grid item sm={4}>
          <FormControl variant="outlined" className={useStyles.formControl} error>
          <FormHelperText>Grado</FormHelperText>
      <Select
          labelId="grade"
          id="grade"
          value={this.state.grade}
          onChange={this.onChangeGrade}
        >
          <MenuItem value={1}>1º</MenuItem>
          <MenuItem value={2}>2º</MenuItem>
          <MenuItem value={3}>3º</MenuItem>
          <MenuItem value={4}>4º</MenuItem>
          <MenuItem value={5}>5º</MenuItem>
          <MenuItem value={6}>6º</MenuItem>
        </Select>
        
        <FormHelperText>Selecciona una opción</FormHelperText>
        </FormControl>
        </Grid>
      )
    }
  }

  ShowFormMail() {
    if (this.mail_form === true) {
      return (
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="mail"
            label="Correo electrónico"
            name="mail"
            autoComplete="mail"
            onChange={this.onChangeMail}
          />
        </Grid>
      )
    } else if (this.existing_mail === true) {
      return (
        <Grid item xs={12}>
          <TextField
            error
            variant="outlined"
            required
            fullWidth
            id="mail"
            label="Correo electrónico"
            name="mail"
            autoComplete="mail"
            helperText="Ya existe una cuenta vinculada a este correo."
            onChange={this.onChangeMail}
          />
        </Grid>
      )
    } else {
      return (
        <Grid item xs={12}>
          <TextField
            error
            variant="outlined"
            required
            fullWidth
            id="mail"
            label="Correo"
            name="mail"
            autoComplete="mail"
            helperText={regexErrors['mail']}
            onChange={this.onChangeMail}
          />
        </Grid>
      )
    }
  }

  ShowFormPassword() {
    if (this.password_form === true) {
      return (
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.onChangePassword}
          />
        </Grid>
      )
    } else {
      return (
        <Grid item xs={12}>
          <TextField
            error
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={regexErrors['password']}
            onChange={this.onChangePassword}
          />
        </Grid>
      )
    }
  }

  ShowFormConfirmPassword() {
    if (this.confirm_password_form === true) {
      return (
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="confirm_password"
            label="Confirmar contraseña"
            type="password"
            id="confirm_password"
            onChange={this.onChangeConfirmPassword}
          />
        </Grid>
      )
    } else {
      return (
        <Grid item xs={12}>
          <TextField
            error
            variant="outlined"
            required
            fullWidth
            name="confirm_password"
            label="Confirmar contraseña"
            type="password"
            id="confirm_password"
            helperText={regexErrors['confirm_password']}
            onChange={this.onChangeConfirmPassword}
          />
        </Grid>
      )
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
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
                {this.ShowFormName()}
                {this.ShowFormLastName()}
                {this.ShowFormLastName2()}
                {this.ShowFormAge()}
                {this.ShowFormGender()}
                {this.ShowFormGrade()}
                {this.ShowFormMail()}
                {this.ShowFormPassword()}
                {this.ShowFormConfirmPassword()}
              </Grid>
              <br />
              <Button
                id="register-btn"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={useStyles.submit}
                onClick={this.onSubmitData}
              >
                Registrarse
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
