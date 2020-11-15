import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {

    state = {
        mail: ''
    }
    async componentDidMount() {
        const res = await axios.get(`http://api-savingtheword.azurewebsites.net/api/usuarios/${localStorage.getItem('IdUsuario')}`)
        this.setState({ mail: res.data.data.Correo });
    }

    render() {
        return (
            <div>
                {this.state.mail}
            </div>
        )
    }
}
