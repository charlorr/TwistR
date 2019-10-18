import Welcome from "views/Welcome.jsx";
import LogIn from "views/LogIn.jsx";
import Register from "views/Register.jsx";
import ForgotPassword from "views/ForgotPassword.jsx";
import Profile from "views/Profile.jsx";
import Dashboard from "views/Dashboard.jsx";
import Timeline from "views/Timeline.jsx";
import Explore from "views/Explore.jsx";
import Notifications from "views/Notifications.jsx";

var routes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: "fa fa-home",
    component: Welcome,
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
    icon: "fas fa-pencil-alt",
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
    path: "/register",
    name: "Register",
    icon: "fas fa-sign-in-alt",
    component: Register,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Log In",
    icon: "fas fa-sign-in-alt",
    component: LogIn,
    layout: "/admin"
  },
  {
    path: "/forgot",
    name: "Forgot Password",
    icon: "fas fa-sign-in-alt",
    component: ForgotPassword,
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
