/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Home from "@material-ui/icons/Home";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Person from "@material-ui/icons/Person";
import Demande from "@material-ui/icons/PersonAdd";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Lock from "@material-ui/icons/Lock";
import Planning from "@material-ui/icons/DateRange";
import Report from "@material-ui/icons/Note";
import Dashboard from "@material-ui/icons/PieChart";

import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Projet from "views/Projet/Projet.js";
import Demandes from "views/Demande/Demande.js";

import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import Habilitation from "views/Habilitation/Habilitation.js";
const dashboardRoutes = [

  {
    path: "/home",
    name: "Accueil",
    rtlName: "الصفحة الرئيسية",
    icon: Home,
    component: DashboardPage, // entrer le nom de la page a afficher
    layout: "/admin"
  },
  {
    path: "/Collaborators",
    name: "Collaborateurs",
    rtlName: "  المتعاونين",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/project",
    name: "Projets",
    rtlName: "المشاريع",
    icon: "content_paste",
    component: Projet,
    layout: "/admin"
  },
  {
    path: "/demande",
    name: "Demande",
    rtlName: "الطلبات",
    icon: Demande,
    component: Demandes,
    layout: "/admin"
  },
  // {
  //   path: "/habilitation",
  //   name: "Habilitation",
  //   rtlName: "التأهيلات",
  //   icon: Lock,
  //   component: Habilitation,
  //   layout: "/admin"
  // },
  {
    path: "/calendar",
    name: "Calendrier",
    rtlName: "التقويم",
    icon: CalendarToday,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/planning",
    name: "Planification",
    rtlName: "التخطيط",
    icon: Planning,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "Rapport",
    rtlName: " تقرير",
    icon: Report,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Tableau de bord",
    rtlName: " لوحة القيادة",
    icon: Dashboard,
    component: UpgradeToPro,
    layout: "/admin"
  }


  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },

];

export default dashboardRoutes;
