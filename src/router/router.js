// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import Beranda from "../views/Beranda.vue";
import AdministrasiPage from "../views/AdministrasiPage.vue";
import Berita from "../views/Berita.vue"

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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
