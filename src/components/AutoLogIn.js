import axios from 'axios'
import getUrl from '../components/getUrl'

export default async function AutoLogIn(mail, password) {
  const res = await axios.post('http://localhost:4000/api/juego/login', {
    correo: mail,
    clave: password,
  }
  )
  localStorage.setItem('IdUsuario', res.data.data.id);
  localStorage.setItem('confirmado', res.data.data.confirmado);
  window.location = getUrl()+"activities";
}