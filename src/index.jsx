import React, { render } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './index.scss';

const ROOT = document.getElementById('root');

// Stateless Functional Component (SFC)
const Container = ({verb}) => (
    <div>
        <h1>Hellooo</h1>
        <App name="Lisa">{verb} <strong>delicious</strong> roast chicken @ Zuni!</App>
    </div>
);

ReactDOM.render(<Container verb="Eating" />, ROOT);

