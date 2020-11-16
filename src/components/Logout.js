export default function Logout() {
    localStorage.setItem('IdUsuario', null);
    localStorage.setItem('confirmado',null);
    window.location = "http://localhost:3000/"
}
