import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "@/views/HomeView";
import AddDragon from "@/views/AddDragonView";

const routes = [
  {path: "/", component: HomeView},
  {path: "/addDragon", component: AddDragon},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
