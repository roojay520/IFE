import 'babel-polyfill';
import 'normalize.css';
import './base.scss';
import Hello from './hello';

const app = document.getElementById('app');
const myApp = new Hello();

myApp.attach(app);
