import Welcome from "views/Welcome.jsx";
import Profile from "views/Profile.jsx";
import Dashboard from "views/Dashboard.jsx";
import Userline from "views/Userline.jsx";
import Timeline from "views/Timeline.jsx";
import Explore from "views/Explore.jsx";
import Notifications from "views/Notifications.jsx";

var routes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: "fa fa-home",
    component: Welcome,
    layout: "/admin",
    auth: false
  },
  {
    path: "/profile/user",
    name: "Profile",
    icon: "fas fa-user-alt",
    component: Profile,
    layout: "/admin",
    auth: true
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "far fa-newspaper",
    component: Dashboard,
    layout: "/admin",
    auth: true
  },
  {
    path: "/userline/:pk",
    name: "Userline",
    icon: "far fa-newspaper",
    component: Userline,
    layout: "/admin",
    auth: true
  },
  {
    path: "/timeline",
    name: "Timeline",
    icon: "fas fa-pencil-alt",
    component: Timeline,
    layout: "/admin",
    auth: true
  },
  {
    path: "/explore",
    name: "Explore",
    icon: "fas fa-rocket",
    component: Explore,
    layout: "/admin",
    auth: false //Authenticated or Unauthenticated
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fas fa-bell",
    component: Notifications,
    layout: "/admin",
    auth: true
  },
];
export default routes;