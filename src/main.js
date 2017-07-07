// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Goods from './components/goods/goods.vue';
import Ratings from './components/ratings/ratings.vue';
import Seller from './components/seller/seller.vue';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
	{ path: '/goods', component: Goods },
	{ path: '/ratings', component: Ratings },
	{ path: '/seller', component: Seller }
];

const router = new VueRouter({
	linkActiveClass: 'active',
	routes: routes
});

new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');

// router.push('/goods');
