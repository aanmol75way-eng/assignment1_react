import { Link } from "react-router"
const Register = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      {/* LEFT SIDE (Desktop only) */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Join Us Today in 75way
          </h1>
          <p className="text-indigo-100 text-lg">
            Create an account and start your journey with our platform.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (Form) */}
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 my-10">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Create Account
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              It’s quick and easy
            </p>
          </div>

          {/* Form (UI only) */}
          <form className="space-y-4">

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="JohnDoe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              className="cursor-pointer w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <span className="text-indigo-600 cursor-pointer ml-1">
              <Link to={'/login'}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
