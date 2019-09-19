import SignIn from "views/SignIn.jsx";
import Profile from "views/Profile.jsx";
import Dashboard from "views/Dashboard.jsx";
import Timeline from "views/Timeline.jsx";
import Explore from "views/Explore.jsx";
import Notifications from "views/Notifications.jsx";

var routes = [
  {
    path: "/signin",
    name: "Sign In / Register",
    icon: "nc-icon nc-caps-small",
    component: SignIn,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Edit Profile",
    icon: "nc-icon nc-single-02",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/timeline",
    name: "Timeline",
    icon: "nc-icon nc-bank",
    component: Timeline,
    layout: "/admin"
  },
  {
    path: "/explore",
    name: "Explore",
    icon: "nc-icon nc-tile-56",
    component: Explore,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
];
export default routes;
