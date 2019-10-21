import React, {Component } from 'react';
import App from '../../App'
import { authenticate } from '../../util/authenticateUser'
import { UsernameContext } from '../../context/username'
import {MarginedInput, Submit, LoginForm} from './elements'

export interface LoginAreaProps {

}

export interface LoginAreaState {
    authenticated: boolean;
    username: string;
    password: string;
    description: string;
    outlined: boolean;
}

export class LoginArea extends Component<LoginAreaProps, LoginAreaState> {
    public state: LoginAreaState = {
        authenticated: false,
        username: '',
        password: '',
        description: '',
        outlined: false
    }
    private readonly lengthLimit: number = 15;
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
            e.preventDefault()
            this.setState({
                username: e.target.value.slice(0, this.lengthLimit),
                outlined: e.target.value.length >= this.lengthLimit
            })
        }
    public readonly handlePasswordOnChange: React.ChangeEventHandler<HTMLInputElement> = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            this.setState({
                password: e.target.value
            })
        }
    render() {
        return this.state.authenticated ? <UsernameContext.Provider value={this.state.username}><App /></UsernameContext.Provider> : (<LoginForm>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: 
                            <MarginedInput 
                                type={'text'} 
                                name={'username'} 
                                onChange={this.handleUsernameOnChange} 
                                value={this.state.username}
                                style={{
                                    border: this.state.outlined ? '5px solid red' : undefined
                                }}
                                placeholder={'enter your username'} />
                        </label>
                    </div>  
                    <div>
                        <label>Password: 
                            <MarginedInput 
                                type={'password'} 
                                name={'password'} 
                                onChange={this.handlePasswordOnChange}
                                value={this.state.password}
                                placeholder={'password'} />
                        </label>
                    </div>
                    
                    <div><Submit type={'submit'} >Login</Submit></div>
                </form> 
                <p style={{color: 'red'}}>{this.state.description}</p>
            </LoginForm>)
    }
}