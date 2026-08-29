import { Link } from "react-router-dom";

function Navbar() {

    const links = [
        { name: "Home", path: "/home" },
        { name: "Services", path: "/services" },
        { name: "Categories", path: "#" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b-2 border-orange-200/90 bg-amber-50/90 shadow-[0_8px_30px_rgba(85,35,58,0.08)] backdrop-blur-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">

                {/* Logo */}

                <Link
                    to="/"
                    className="group shrink-0 rounded-md outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
                >
                    <h1 className="text-xl font-black tracking-[0.18em] text-[#3f2136] transition-colors duration-200 group-hover:text-orange-600 sm:text-2xl">
                        KALASETU
                    </h1>
                </Link>

                {/* Navigation */}

                <ul
                    className="hidden items-center gap-1 md:flex"
                    aria-label="Primary navigation"
                >
                    {links.map((link) => (

                        <li key={link.name}>

                            {link.path === "#" ? (

                                <a
                                    href="#"
                                    className="rounded-lg px-4 py-2 text-sm font-bold text-stone-700 transition-colors duration-200 hover:bg-rose-100 hover:text-[#713b62] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                                >
                                    {link.name}
                                </a>

                            ) : (

                                <Link
                                    to={link.path}
                                    className="rounded-lg px-4 py-2 text-sm font-bold text-stone-700 transition-colors duration-200 hover:bg-rose-100 hover:text-[#713b62] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                                >
                                    {link.name}
                                </Link>

                            )}

                        </li>

                    ))}
                </ul>

                {/* Buttons */}

                <div className="flex items-center gap-2 sm:gap-3">

                    <Link
                        to="/login"
                        className="rounded-lg border-2 border-violet-300 bg-violet-50 px-3 py-2 text-sm font-bold text-violet-800 transition hover:border-violet-600 hover:bg-violet-600 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300 sm:px-5"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="rounded-lg border-2 border-orange-600 bg-orange-600 px-3 py-2 text-sm font-bold text-white shadow-[3px_3px_0_#713b62] transition hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-[4px_5px_0_#713b62] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 sm:px-5"
                    >
                        Sign Up
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;