import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Profile from "./components/Profile.vue"
import Home from "./components/Home.vue"
import Workout from "./components/Workouts.vue"
import LifeStyle from "./components/LifeStyle.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/workouts",
    name: "Workouts",
    component: Workout,
  },
  {
    path: "/lifestyle",
    name: "LifeStyle",
    component: LifeStyle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
