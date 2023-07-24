import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'  // Normal Method

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: { title: 'Home' }
	},
	{
		path: '/about',
		name: 'about',
		// component: AboutView, // Normal Method
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue'),
		meta: { title: 'About' }
	}
]

const router = createRouter({
	mode: 'history',
	history: createWebHashHistory(import.meta.env.BASE_URL),
	//historyApiFallback: true,
	routes,
	linkActiveClass: "navActive",
	linkExactActiveClass: "navActive",
	scrollBehavior(to, from, savedPosition) {
	  // always scroll to top
	  return { top: 0 }
	},

});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' - vuebasesetup' || 'vuebasesetup';
    next();
});
// console.log("import.meta.url", import.meta.env.BASE_URL);

export default router