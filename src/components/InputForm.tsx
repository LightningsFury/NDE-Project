import React, {Component} from 'react';

export interface InputFormProps {

}
export interface InputFormState {
    value: string;
}

export class InputForm extends Component<InputFormProps, InputFormState> {
    constructor(props: InputFormProps) {
        super(props);
    }
    public state: InputFormState = {
        value: ''
    };
    public submit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    public onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {}
    render() {
        return (<div>
            <form onSubmit={this.submit}>
                <input type={'text'} />
                <input type={'submit'} />
            </form>
        </div>)
    }
}