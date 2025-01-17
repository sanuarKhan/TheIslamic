import { Link } from "react-router-dom";
import { FaHome, FaBook, FaPlus, FaList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 bg-gray-900">
        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="flex items-center space-x-3 hover:bg-gray-700 rounded-md px-3 py-2"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>

          {/* Quran Menu */}
          <li>
            <Link
              to="/quran"
              className="flex items-center space-x-3 hover:bg-gray-700 rounded-md px-3 py-2"
            >
              <FaBook />
              <span>View Quran</span>
            </Link>
          </li>

          {/* Add Verse */}
          <li>
            <Link
              to="/quran/add"
              className="flex items-center space-x-3 hover:bg-gray-700 rounded-md px-3 py-2"
            >
              <FaPlus />
              <span>Add Verse</span>
            </Link>
          </li>

          {/* Quran List */}
          <li>
            <Link
              to="/quran-list"
              className="flex items-center space-x-3 hover:bg-gray-700 rounded-md px-3 py-2"
            >
              <FaList />
              <span>Ayah List</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="bg-gray-900 p-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Quran App</p>
      </div>
    </div>
  );
};

export default Sidebar;
