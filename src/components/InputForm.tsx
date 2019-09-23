import React, {Component} from 'react';

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
                <input type={'text'} onChange={this.props.handleChange} value={this.props.value} />
                <input type={'submit'} />
            </form>
        </div>)
    }
};