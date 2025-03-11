import {
  FaChartBar,
  FaCog,
  FaEnvelope,
  FaHome,
  FaNewspaper,
} from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { MdHandshake, MdOutlinePriceChange } from "react-icons/md";

const menuItems = [
  { name: "Home", icon: FaHome, color: "bg-blue-500", link: "/" },
  {
    name: "Services",
    icon: MdHandshake,
    color: "bg-green-500",
    link: "/services",
  },
  {
    name: "Pricing",
    icon: MdOutlinePriceChange,
    color: "bg-yellow-500",
    link: "/pricing",
  },
  {
    name: "Contact",
    icon: GrContact,
    color: "bg-purple-500",
    link: "/contact",
  },
  { name: "Settings", icon: FaCog, color: "bg-red-500", link: "/settings" },
];

export default menuItems;
