// src/router.js
import {
	createRouter,
	createWebHistory
} from "vue-router";
import Beranda from "../views/Beranda.vue";
import AdministrasiPage from "../views/AdministrasiPage.vue";
import Berita from "../views/Berita.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
	// {
	// 	path: "/login",
	// 	name: "Login",
	// 	component: Login,
	// 	meta: {
	// 		requiresLogin: true
	// 	}, // This route requires login first
	// },
	{
		path: "/",
		name: "Beranda",
		component: Beranda,
		meta: {
			requiresLogin: true
		}, // This route requires login first
	},
	{
		path: "/administrasi",
		name: "Administrasi",
		component: AdministrasiPage,
		meta: {
			requiresLogin: true
		}, // This route requires login first
	},
	{
		path: "/berita",
		name: "Berita",
		component: Berita,
		meta: {
			requiresLogin: true
		}, // This route requires login first
	},
	{
		path: "/profil",
		name: "Profil",
		component: Profil,
		meta: {
			requiresLogin: true
		}, // This route requires login first
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes,
// });

// Global navigation guard
router.beforeEach((to, from, next) => {
	if (to.meta.requiresLogin && !from.name) {
		// Redirect to login if the route requires login and user is not coming from login page
		next({
			name: 'Login'
		});
	} else {
		// Allow access to the route
		next();
	}
});

export default router;