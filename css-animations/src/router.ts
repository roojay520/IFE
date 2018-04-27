import Vue from 'vue';
import Router from 'vue-router';
import Demo01 from './views/Demo01.vue';
import Demo02 from './views/Demo02.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/demo01',
      name: 'demo01',
      component: Demo01,
    },
    {
      path: '/demo02',
      name: 'demo02',
      component: Demo02,
    },
  ],
});
