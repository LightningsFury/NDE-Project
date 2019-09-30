import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LoginArea} from './components/LoginArea'
import * as serviceWorker from './serviceWorker';

const Main: React.FunctionComponent = () => (      
    <div className="App">
        <header className="App-header">
            <LoginArea />
        </header>
    </div>
    )

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
