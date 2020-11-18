import axios from 'axios'

export default async function AutoLogIn(mail, password) {
  const res = await axios.post('https://api-savingtheword.azurewebsites.net/api/juego/login', {
    correo: mail,
    clave: password,
  }
  )
  localStorage.setItem('IdUsuario', res.data.data.id);
  localStorage.setItem('confirmado', res.data.data.confirmado);
  window.location = "https://savingtheword.herokuapp.com/activities";
}