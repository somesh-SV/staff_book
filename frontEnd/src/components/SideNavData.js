import * as FaIcons from "react-icons/fa";
import * as materialIcon from "@mui/icons-material";

export const SideNavData = [
  {
    title: "Dasboard",
    path: "/",
    icon: <materialIcon.Dashboard />,
  },
  {
    title: "Staff",
    path: "/services",
    icon: <materialIcon.PeopleAlt />,
    arrow: <FaIcons.FaChevronDown />,
    subMenu: [
      {
        title: "Add Staff",
        path: "/addStaff",
        icon: <materialIcon.LibraryAdd />,
      },
      {
        title: "Staff Table",
        path: "/viewStaff",
        icon: <materialIcon.ListAlt />,
      },
    ],
  },
  {
    title: "Stock",
    path: "/stock",
    icon: <materialIcon.Warehouse />,
    arrow: <FaIcons.FaChevronDown />,
    subMenu: [
      {
        title: "Add Stock",
        path: "/addStock",
        icon: <materialIcon.LibraryAdd />,
      },
      {
        title: "Stock Table",
        path: "/viewStock",
        icon: <materialIcon.ListAlt />,
      },
    ],
  },
  {
    title: "Customer",
    path: "/customer",
    icon: <materialIcon.Warehouse />,
    arrow: <FaIcons.FaChevronDown />,
    subMenu: [
      {
        title: "Add Customer",
        path: "/addCustomer",
        icon: <materialIcon.LibraryAdd />,
      },
      {
        title: "Customer Table",
        path: "/viewCustomer",
        icon: <materialIcon.ListAlt />,
      },
    ],
  },
];
