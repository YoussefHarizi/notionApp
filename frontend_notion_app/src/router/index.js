import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/dashboard/Index";
import Welcome from "../views/Welcome";
import Login from "../views/auth/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
   
  },
  {
    path: "/dashboard",
    name: "Home",
    component: Home,
    meta:{
      layout:"DashboardLayout",
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      layout:"AuthLayout",
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
