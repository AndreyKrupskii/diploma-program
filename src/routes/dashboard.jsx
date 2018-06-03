import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Панель показників",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/station",
    name: "Параметри станції",
    icon: "pe-7s-settings",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Архів спостережень",
    icon: "pe-7s-note2",
    component: TableList
  },
  // {
  //  path: "/typography",
  //  name: "Typography",
  //  icon: "pe-7s-news-paper",
  //  component: Typography
  // },
  //{ path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  {
    path: "/maps",
    name: "Розташування станції",
    icon: "pe-7s-map-marker",
    component: Maps
  },
  {
    path: "/notifications",
    name: "Аварійні події",
    icon: "pe-7s-bell",
    component: Notifications
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Про програму",
    icon: "pe-7s-info",
    component: Upgrade
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
