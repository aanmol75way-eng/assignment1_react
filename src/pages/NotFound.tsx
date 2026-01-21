import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-blue-700 mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-center mb-6 max-w-lg">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg sm:text-xl hover:bg-blue-800 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
