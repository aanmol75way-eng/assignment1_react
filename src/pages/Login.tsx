import { Link } from "react-router";
export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      <div className="hidden md:flex items-center justify-center bg-indigo-600 text-white p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome 75way </h1>
          <p className="text-indigo-100">
            Login to access your dashboard and manage your account.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign In
          </h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />

            <button className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition">
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?
            <span className="text-indigo-600 cursor-pointer ml-1">
              <Link to={'/auth/register'}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
