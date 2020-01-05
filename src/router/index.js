import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Hello from "@/components/Hello";
import Logout from "@/components/Logout";
import Create from "@/components/Sign-Up";
import Edit from "@/components/Edit-User";
import Lesson from "@/components/Lesson";
import SingleLesson from "@/components/SingleLesson";
import Courses from "@/components/Courses";
import MyCourses from "@/components/MyCourses";
import SingleCourses from "@/components/SingleCourses";

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
      path: "/courses",
      name: "Courses",
      component: Courses
    },
    {
      path: "/my-courses",
      name: "MyCourses",
      component: MyCourses
    },
    {
      path: "/my-courses/:id",
      name: "SingleCourses",
      component: SingleCourses
    },
    {
      path: "/lesson",
      name: "Lesson",
      component: Lesson
    },
    {
      path: "/lesson/:id",
      name: "SingleLesson",
      component: SingleLesson
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout
    }
  ]
});
