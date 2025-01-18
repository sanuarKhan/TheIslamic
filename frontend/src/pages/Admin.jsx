import Sidebar from "../components/Sidebar";
import { logout } from "../api/api";

const Admin = () => {
  const handleLogout = async () => {
    const response = await logout();
    window.location.href = "/";

    console.log(response);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100 relative">
        <div className="flex gap-6">
          <div className="absolute md:relative md:col-span-1 h-full start-0 top-0 grid">
            <Sidebar />
          </div>
          <div className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700">Users</h2>
              <p className="mt-2 text-gray-500">
                Manage user accounts and roles.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Users
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700">Posts</h2>
              <p className="mt-2 text-gray-500">Review and manage posts.</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Manage Posts
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700">Analytics</h2>
              <p className="mt-2 text-gray-500">
                View analytics and performance.
              </p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
