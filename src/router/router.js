// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import Beranda from "../views/Beranda.vue";
import AdministrasiPage from "../views/AdministrasiPage.vue";
import Berita from "../views/Berita.vue"
import Profil from "../views/Profil.vue"
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";


const routes = [
	{
		path: "/",
		name: "Beranda",
		component: Beranda,
	},
	{
		path: "/administrasi",
		name: "Administrasi",
		component: AdministrasiPage,
	},
	{
		path: "/berita",
		name: "Berita",
		component: Berita,
	},
	{
		path: "/profil",
		name: "Profil",
		component: Profil,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
