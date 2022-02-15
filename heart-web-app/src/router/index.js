import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Welcome from "../views/Welcome.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import RegisterSuccess from "../views/RegisterSuccess.vue";
import MyAccount from "../views/MyAccount.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/registersuccess",
    name: "registersuccess",
    component: RegisterSuccess,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/welcome",
    name: "welcome",
    component: Welcome
  },
  {
    path: "/myaccount",
    name: "myaccount",
    component: MyAccount,
    props: true
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: ForgotPassword
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
