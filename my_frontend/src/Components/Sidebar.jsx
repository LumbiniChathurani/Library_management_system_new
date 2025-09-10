import {
  FaBook,
  FaUsers,
  FaCog,
  FaQuestionCircle,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLibrary } from "react-icons/io5";

function Sidebar() {
  const navItems = [
    { path: "/books", label: "Books", icon: <FaBook size={22} /> },
    { path: "/members", label: "Members", icon: <FaUsers size={22} /> },
    { path: "/profile", label: "Profile", icon: <FaUserCircle size={22} /> },
    { path: "/settings", label: "Settings", icon: <FaCog size={22} /> },
    { path: "/help", label: "Help", icon: <FaQuestionCircle size={22} /> },
  ];

  return (
    <aside className="w-20 bg-gray-800 text-white flex flex-col items-center py-6 space-y-8 fixed top-0 left-0 h-full">
      <IoLibrary className="text-cyan-500 text-2xl" />

      <nav className="flex flex-col items-center space-y-8 mt-10">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }`
            }
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
