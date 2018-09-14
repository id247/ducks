import { Home, Counter } from "../components/pages";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    exact: true
  },
  {
    path: "/counter",
    name: "counter",
    component: Counter,
    exact: true
  }
];

export default routes;
