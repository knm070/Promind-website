import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../component/Home/index"));
const Courses = lazy(() => import("../component/Courses"));
const Teachers = lazy(() => import("../component/Teachers"));
const Blog = lazy(() => import("../component/Blog"));


interface RouteData {
  id: number;
  path: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
}

export const Data: RouteData[] = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/Teachers",
    component: Teachers,
  },
  {
    id: 3,
    path: "/Courses",
    component: Courses,
  },
  {
    id: 4,
    path: "/Blog",
    component: Blog,
  },

];
