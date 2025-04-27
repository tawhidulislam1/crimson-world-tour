import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";
import logo from "../assets/logo.png";
const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-24" />
                </div>

                {/* Form */}
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Your Password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-sm text-gray-700">Remember Me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <button className="w-full py-2 bg-yellow-400 text-white rounded-md font-semibold hover:bg-yellow-500">
                        Login
                    </button>

                    {/* Sign up Button */}
                    <div className="mt-4 text-center">
                        <button className="w-full py-2 border border-gray-300 rounded-md font-semibold text-sm">
                            Sign up
                        </button>
                    </div>

                    {/* Social Login */}
                    <div className="mt-4 text-center">
                        <span className="text-sm text-gray-600">Or Connected to</span>
                        <div className="flex justify-center space-x-4 mt-2">
                            <button className="bg-gray-200 p-2  rounded-full">
                                <FaGoogle />

                            </button>
                            <button className="bg-blue-600 p-2 text-white rounded-full">
                                <FaFacebook />

                            </button>
                            <button className="bg-black text-white p-2 rounded-full">
                                <FaApple />

                            </button>
                        </div>
                    </div>

                    {/* Transfer link */}
                    <div className="mt-4 text-center">
                        <span className="text-sm text-gray-600">Sign up by <a href="#" className="text-blue-600 hover:underline">transfer</a> or</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;