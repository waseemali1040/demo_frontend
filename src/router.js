import { createWebHistory, createRouter } from "vue-router";
import addTask from "./components/addTask.vue";
let routes = [
  { path: "/", name: "Home", component: addTask },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;