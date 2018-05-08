import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import registerServiceWorker from './registerServiceWorker';

if (typeof window !== 'undefined') { window.React = React; }


ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
