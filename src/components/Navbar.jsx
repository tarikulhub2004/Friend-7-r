
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-gray-500 font-bold">
                        <li><a>Home</a></li>
                        <li><a>Timeline</a></li>
                        <li><a>Status</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;