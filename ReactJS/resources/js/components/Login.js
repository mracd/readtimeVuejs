import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let uri = '/login';
        axios.post(uri, this.state).then((response) => {
            if (response.data.result) {
                localStorage.setItem('jwt', response.data.result);
                this.props.history.push('/');
            }
        })
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading ">Login</div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <label>User name</label>
                        <input type={'text'} className="form-control" onChange={this.handleChangeEmail}/>
                        <label>Password</label>
                        <input type={'password'} className="form-control"
                               onChange={this.handleChangePassword}/>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login