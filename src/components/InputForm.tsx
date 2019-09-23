import React, {Component} from 'react';

export interface InputFormProps {

}

export class InputForm extends Component<InputFormProps> {
    submit = (e: Event) {
        e.preventDefault();
    }
    render() {
        return (<div>
            <form onSubmit={this.submit}>
                <input type={'text'} />
                <input type={'submit'} />
            </form>
        </div>)
    }
}