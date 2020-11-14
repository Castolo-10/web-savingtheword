export default function Logout() {
    localStorage.setItem('IdUsuario', null);
    window.location = "http://localhost:3000/"
}
