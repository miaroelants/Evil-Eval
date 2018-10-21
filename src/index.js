import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import Store, {doCalculate, addToCalculate, clearAll} from './store'


ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

Store.dispatch(addToCalculate('5'))
Store.dispatch(addToCalculate('+'))
Store.dispatch(addToCalculate('4'))
Store.dispatch(doCalculate())
Store.dispatch(clearAll())
