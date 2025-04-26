import logo from "../assets/logo.png";
const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Destination</a></li>
        <li><a>Tours</a></li>
        <li><a>Contact</a></li>
        <li><a>About Us </a></li>

    </>
    return (
        <nav className="max-w-full sm:max-w-96 lg:max-w-7xl mx-auto ">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} alt="logo" width={80} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2.5">
                    <button className="btn bg-[#FFCD05] text-black rounded-4xl  py-5 px-7">
                        Login
                    </button>
                    <button className="btn border-[#FFCD05] bg-none text-black rounded-4xl  py-5 px-7">
                        Register
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;