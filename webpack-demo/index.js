import 'babel-polyfill';
import 'normalize.css';
import './src/base.scss';
import Hello from './src/hello';

const app = document.getElementById('app');
const myApp = new Hello();

myApp.attach(app);
