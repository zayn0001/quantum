import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPersonPin,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import MainDashboard1 from "views/admin/rtl";
import MainDashboard2 from "views/admin/report";
import Eventregister from "views/admin/profile2";

import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Homepage",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Driver Dashboard",
    layout: "/admin",
    path: "/rtl",
    icon: <Icon as={MdPersonPin} width='20px' height='20px' color='inherit' />,
    component: MainDashboard1 ,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Report",
    layout: "/admin",
    path: "/report",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: MainDashboard2,
  },
  {
    name: "Register Events",
    layout: "/admin",
    path: "/profile2",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Eventregister,
  },

];

export default routes;
