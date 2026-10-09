import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-gray-500 font-bold">
                        <li><NavLink to="/"><IoHomeOutline />Home</NavLink></li>
                        <li><NavLink to="/timeline"><RiTimeLine />Timeline</NavLink></li>
                        <li><NavLink to="stats"><ImStatsDots />Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;