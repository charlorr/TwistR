import SignIn from "views/SignIn.jsx";
import Profile from "views/Profile.jsx";
import Dashboard from "views/Dashboard.jsx";
import Timeline from "views/Timeline.jsx";
import Explore from "views/Explore.jsx";
import Notifications from "views/Notifications.jsx";

var routes = [
  {
    path: "/signin",
    name: "Log In",
    icon: "fas fa-sign-in-alt",
    component: SignIn,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "fas fa-user-alt",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "far fa-newspaper",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/timeline",
    name: "Timeline",
    icon: "fas fa-user-edit",
    component: Timeline,
    layout: "/admin"
  },
  {
    path: "/explore",
    name: "Explore",
    icon: "fas fa-rocket",
    component: Explore,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fas fa-bell",
    component: Notifications,
    layout: "/admin"
  },
];
export default routes;
