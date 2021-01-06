import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test-page1',
      component: require('@/components/TestPage1').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
