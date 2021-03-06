import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import EnterEmail from "../views/auth/EnterEmail.vue";
import EnterNewPassword from "../views/auth/EnterNewPassword.vue";
import Home from "../views/Home.vue";
import CreateBlog from "../views/blog/CreateBlog.vue";
import BlogDetail from "../views/blog/BlogDetail.vue";
import UserBlog from "../views/blog/UserBlog.vue";
import EditBlog from "../views/blog/EditBlog.vue";
import BlogFiltedByCategory from "../views/blog/BlogFiltedByCategory.vue";

Vue.use(VueRouter);

// const authGuard = (to, from, next) => {
//   if (!localStorage.getItem("id")) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// };

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/reset-password/enter-email",
    name: "EnterEmail",
    component: EnterEmail,
  },
  {
    path: "/reset-password/enter-new-password/:userId/:token",
    name: "EnterNewPassword",
    component: EnterNewPassword,
    props: true,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/home/:token/:userId",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/blog/category/:category",
    name: "GetBlogByCategory",
    component: BlogFiltedByCategory,
    props: true,
  },
  {
    path: "/create-blog",
    name: "Create-Blog",
    component: CreateBlog,
  },
  {
    path: "/blog-detail/:blog_id",
    name: "Blog-Detail",
    component: BlogDetail,
  },
  {
    path: "/user-blog",
    name: "User-Blog",
    component: UserBlog,
  },
  {
    path: "/edit-blog/:blog_id",
    name: "Edit-Blog",
    component: EditBlog,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
