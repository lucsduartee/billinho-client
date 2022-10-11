import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EnrollmentsView from "../views/EnrollmentsView.vue";
import StudentsView from "../views/StudentsView.vue";
import InstitutionsView from "../views/InstitutionsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/enrollments",
    name: "enrollments",
    component: EnrollmentsView,
    children: [
      {
        path: "new",
        component: 
      },
    ],
  },
  {
    path: "/students",
    name: "students",
    component: StudentsView,
    children: [
      {
        path: "new",
        component: 
      },      
    ],
  },
  {
    path: "/institutions",
    name: "institutions",
    component: InstitutionsView,
    children: [
      {
        path: "new",
        component: 
      },      
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
