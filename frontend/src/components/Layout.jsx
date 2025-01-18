import { Outlet, Link, useLocation } from "react-router-dom";
import GoLoginBtn from "./GoLoginBtn";
import SearchBar from "./SearchBar";

const Layout = () => {
  const location = useLocation();

  const excludeRoutes = ["/login", "/register", "/admin/"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className=" text-white p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Quran Project</h1>
          <ul className="flex space-x-8 items-center">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quran" className="hover:underline">
                Quran
              </Link>
            </li>
            {/* <li>
              <Link to="/admin" className="hover:underline">
                Admin
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="md:hidden text-center w-full flex justify-center items-center">
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center  ">
        {!excludeRoutes.includes(location.pathname) && (
          <p>
            <Link to="/login">&copy;</Link> 2024 Quran Project. All rights
            reserved.
          </p>
        )}
      </footer>
    </div>
  );
};

export default Layout;
