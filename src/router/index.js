import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
import Preview from "../views/Preview.vue";

const routes = [
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/preview",
    name: "preview",
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
