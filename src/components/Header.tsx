import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white sticky top-0 z-50 shadow-md font-serif">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">My Company</h1>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 mt-2 md:mt-0 items-center">
          <Link
            to="/"
            className="text-base sm:text-lg md:text-lg hover:text-blue-200 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-base sm:text-lg md:text-lg hover:text-blue-200 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-base sm:text-lg md:text-lg hover:text-blue-200 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base sm:text-lg md:text-lg hover:text-blue-200 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/auth/login"
            className="text-base sm:text-lg md:text-lg bg-white text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
