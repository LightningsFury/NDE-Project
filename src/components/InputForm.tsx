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
    readonly public handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    readonly public handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {

    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} onChange={this.handleChange} />
                <input type={'submit'} />
            </form>
        </div>)
    }
}