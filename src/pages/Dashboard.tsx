// App.tsx
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router";
const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`bg-white w-64 p-4 shadow-lg fixed md:static h-full z-30 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">My App</h2>
        <nav className="flex flex-col gap-3">
          <Link
            to="#"
            className="p-2 rounded hover:bg-gray-200 transition text-sm sm:text-base md:text-lg"
          >
            Dashboard
          </Link>
          <Link
            to="#"
            className="p-2 rounded hover:bg-gray-200 transition text-sm sm:text-base md:text-lg"
          >
            Profile
          </Link>
          <Link
            to="#"
            className="p-2 rounded hover:bg-gray-200 transition text-sm sm:text-base md:text-lg"
          >
            Messages
          </Link>
          <Link
            to="#"
            className="p-2 rounded hover:bg-gray-200 transition text-sm sm:text-base md:text-lg"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-1">
        {/* Navbar */}
        <header className="bg-white p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-gray-200 rounded focus:outline-none"
            >
            <IoReorderThree />
            </button>
            <span className="text-base sm:text-lg font-bold">My App</span>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center gap-4 w-full justify-between">
            <span className="font-bold text-lg sm:text-xl md:text-2xl">My App</span>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 text-sm sm:text-base md:text-lg border rounded-md"
              />
              <button className="cursor-pointer bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base md:text-lg hover:bg-blue-600 transition">
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 md:p-8 flex-1 overflow-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            This layout is fully responsive! The sidebar, navbar, and text all adapt to different screen sizes. On mobile, the sidebar is hidden and can be toggled with the menu button. On desktop, it is always visible.
          </p>
        </main>
      </div>
    </div>
  );
};

export default App;
