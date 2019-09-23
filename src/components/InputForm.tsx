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
    public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    public readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value + ' '})
    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} onChange={this.handleChange} value={this.state.value} />
                <input type={'submit'} />
            </form>
        </div>)
    }
}\