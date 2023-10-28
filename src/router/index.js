import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
import Preview from "../views/Preview.vue";
import FormEditor from "../views/FormEditor.vue";

const routes = [
  {
    path: "/",
    name: "form",
    component: Form,
  },
  {
    path: "/preview",
    name: "preview",
    component: Preview,
  },
  {
    path: "/formeditor",
    name: "formEditor",
    component: FormEditor,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
