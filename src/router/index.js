import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Skills from "@/views/Skill.vue";
import Timeline from "@/views/Timeline.vue";
import Works from "@/views/Works.vue";
import Inspirations from "@/views/Inspirations.vue";

const routes = [
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/inspirations",
    name: "Inspirations",
    component: Inspirations,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;