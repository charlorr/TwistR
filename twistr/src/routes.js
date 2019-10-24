import Welcome from "views/Welcome.jsx";
import Profile from "views/Profile.jsx";
import Dashboard from "views/Dashboard.jsx";
import Timeline from "views/Timeline.jsx";
import Explore from "views/Explore.jsx";
import Notifications from "views/Notifications.jsx";
import ProfileEditCard from "components/ProfileEditCard/ProfileEditCard";

var routes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: "fa fa-home",
    component: Welcome,
    layout: "/admin"
  },
  {
    path: "/profile/user/:pk",
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
    path: "/notifications",
    name: "Notifications",
    icon: "fas fa-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user/:pk",
    name: "ProfileUser",
    icon: "fas fa-user-alt",
    component: ProfileEditCard,
    layout: "/admin"
  },
];
export default routes;