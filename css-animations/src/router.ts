import Vue from 'vue';
import Router from 'vue-router';
import Demo01 from './views/Demo01.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/demo01',
      name: 'demo01',
      component: Demo01,
    },
  ],
});
