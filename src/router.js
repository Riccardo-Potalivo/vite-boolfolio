import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppProjectsShow from "./pages/AppProjectsShow.vue";
import AppNotFound from "./pages/AppNotFound.vue";
import AppContact from "./pages/AppContact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/projects/:slug",
      name: "project-show",
      component: AppProjectsShow,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContact,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: AppNotFound,
    },
  ],
});

export { router };
