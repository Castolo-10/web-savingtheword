import React, { Component } from 'react'
import axios from 'axios'

export default class Users extends Component {

    state = {
        users:[]
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/usuarios')
        this.setState({users: res.data.data});
        console.log (res.data);
        console.log(this.state.users);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    Form User
                    <div className="col-md-8">
                    {
                        this.state.users.map(user => (
                        <li className="list-group-item list-group-item-action" key={user.IdUsuario}>
                            {user.Correo}
                        </li>
                        ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
