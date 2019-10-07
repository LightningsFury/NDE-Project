import React, {Component} from 'react';
import App from '../App'
import { authenticate } from '../util/authenticateUser'

export interface LoginAreaProps {

}

export interface LoginAreaState {
    authenticated: boolean;
    username: string;
    password: string;
    description: string;
}

export class LoginArea extends Component<LoginAreaProps, LoginAreaState> {
    public state: LoginAreaState = {
        authenticated: false,
        username: '',
        password: '',
        description: ''
    }
    constructor(props: LoginAreaProps) {
        super(props)
    }
    public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = 
        (e: React.FormEvent<HTMLFormElement> ) => {
            e.preventDefault();
            if (this.state.username === '' || this.state.password === '') return this.setState({description: 'Username/Password cannot be empty.'})
            if (!this.state.username.match(/^[0-9a-zA-Z]+$/)) return this.setState({
                username: '',
                description: 'Your username contains a strange character.'
            })
            if (!authenticate(this.state)) {
                this.setState({
                    username: '',
                    password: '',
                    description: 'Invalid login details! Try Again.'
                })
                return;
            }
            this.setState({authenticated: true})
        }
    public readonly handleUsernameOnChange: React.ChangeEventHandler<HTMLInputElement> = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                username: e.target.value
            })
        }
    public readonly handlePasswordOnChange: React.ChangeEventHandler<HTMLInputElement> = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                password: e.target.value
            })
        }
    render() {
        return this.state.authenticated ? <App /> : (<React.Fragment >
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type={'text'} 
                        name={'username'} 
                        onChange={this.handleUsernameOnChange} 
                        value={this.state.username}
                        placeholder={'enter your username'} />
                    <input 
                        type={'password'} 
                        name={'password'} 
                        onChange={this.handlePasswordOnChange}
                        value={this.state.password}
                        placeholder={'password'} />
                    <input type={'submit'} />
                </form> 
                <p style={{color: 'red'}}>{this.state.description}</p>
            </React.Fragment>)
    }
}