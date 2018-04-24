import 'babel-polyfill';
import san from 'san';

const app = document.querySelector('#app');
const MyApp = san.defineComponent({
  template: '<ul><li s-for="item in list">{{item}}</li></ul>',
  initData() {
    return {
      list: ['1', '2', '3', '4', '5'],
    };
  },
});

const myApp = new MyApp();

myApp.attach(app);
