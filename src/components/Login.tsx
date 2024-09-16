import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-200">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="font-medium text-center mb-6 text-teal-700 text-xl">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900">
                {" "}
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter you Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-700">
            Don't have an account?
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
