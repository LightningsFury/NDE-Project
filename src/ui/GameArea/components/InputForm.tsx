import React, {Component} from 'react';
import {Input, Submit} from '../elements'

export interface InputFormProps {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
}
export interface InputFormState {
    
}

export class InputForm extends Component<InputFormProps, InputFormState> {
    render() {
        return (<div>
            <form onSubmit={this.props.handleSubmit}>
                <Input type={'text'} onChange={this.props.handleChange} value={this.props.value} ref={input => input && input.focus()} />
                <Submit type={'submit'} />
            </form>
        </div>)
    }
};