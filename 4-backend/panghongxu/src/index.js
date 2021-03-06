import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { injectGlobal } from "styled-components";

import TodoApp from './TodoApp';
import configureStore from './reducers/configureStore'


//ReactDOM.render(<TodoApp/>, document.getElementById('root'));


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    , document.getElementById('root'))

if (module.hot) {
    module.hot.accept('./TodoApp', () => {
        ReactDOM.render(
            <Provider store={store}>
                <TodoApp />
            </Provider>,
            document.getElementById('root'),
        )
    })
}



injectGlobal`
    html,
    body {
        margin: 0;
        padding: 0;
    }

    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
    }

    body {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-weight: 300;
    }
`;
