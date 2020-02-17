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
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Classification",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: TableList,
        layout: "/admin"
    },
    {
        collapse: true,
        name: "Images",
        rtlName: "الجداول",
        icon: Dashboard,
        state: "tablesCollapse",
        views: [
            {
                path: "/table",
                name: "Regular Tables",
                rtlName: "طاولات عادية",
                mini: "RT",
                rtlMini: "صر",
                component: DashboardPage,
                layout: "/admin"
            },
            {
                path: "/table",
                name: "Extended Tables",
                rtlName: "جداول ممتدة",
                mini: "ET",
                rtlMini: "هور",
                component: DashboardPage,
                layout: "/admin"
            },
            {
                path: "/table",
                name: "React Tables",
                rtlName: "رد فعل الطاولة",
                mini: "RT",
                rtlMini: "در",
                component: DashboardPage,
                layout: "/admin"
            }
        ]
    },
    {
        path: "/user",
        name: "Warehouse",
        rtlName: "ملف تعريفي للمستخدم",
        icon: LibraryBooks,
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/table",
        name: "Store Management",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/typography",
        name: "View",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Reports",
        rtlName: "الرموز",
        icon: BubbleChart,
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/maps",
        name: "Payments",
        rtlName: "خرائط",
        icon: LibraryBooks,
        component: Maps,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "User Activity",
        rtlName: "إخطارات",
        icon: Person,
        component: TableList,
        layout: "/admin"
    }

];

export default dashboardRoutes;
