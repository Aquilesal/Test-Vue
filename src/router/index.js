import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Hello from "@/components/Hello";
import Logout from "@/components/Logout";
import Create from "@/components/Sign-Up";
import Edit from "@/components/Edit-User";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "Home",
      component: Hello
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit
    },
    {
      path: "/sign-up",
      name: "Sign-Up",
      component: Create
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout
    }
  ]
});
