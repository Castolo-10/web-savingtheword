import axios from 'axios'

export default async function AutoLogIn(mail, password) {
  const res = await axios.post('https://api-savingtheword.azurewebsites.net/api/juego/login', {
    correo: mail,
    clave: password,
  }
  )
  localStorage.setItem('IdUsuario', res.data.data.id);
  localStorage.setItem('confirmado', res.data.data.confirmado);
  alert("Cuenta registrada exitosamente.");
  window.location = "http://localhost:3000/activities";
}