import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Commands from "../views/Commands.vue";
import FAQs from "../views/FAQs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/commands",
    name: "Commands",
    component: Commands,
  },
  {
    path: "/faqs",
    name: "FAQs",
    component: FAQs,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/cbdocs/",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        // , offset: { x: 0, y: 10 }
      };
    }
  },
});

export default router;
