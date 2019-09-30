import React, {Component} from 'react';

export interface LoginAreaProps {

}

export interface LoginAreaState {
    authenticated: boolean;
    username: string;
    password: string;
}

export class LoginArea extends Component<LoginAreaProps, LoginAreaState> {
    public state: LoginAreaState = {
        authenticated: false,
        username: '',
        password: '',
    }
    constructor(props: LoginAreaProps) {
        super(props)
    }
    public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = 
        (e: React.FormEvent<HTMLFormElement> ) => {
            e.preventDefault();
            alert(this.state)
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
        return (<div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type={'text'} 
                        name={'username'} 
                        onChange={this.handleUsernameOnChange} 
                        placeholder={'enter your username'} />
                    <input 
                        type={'text'} 
                        name={'password'} 
                        onChange={this.handlePasswordOnChange}
                        placeholder={'password'} />
                    <input type={'submit'} />
                </form> 
            </div>)
    }
}