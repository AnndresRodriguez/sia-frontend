import Vue from "vue";
import Router from "vue-router";
import Alumno from "./views/Alumno.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "alumno",
      component: Alumno
    }
  ]
});
