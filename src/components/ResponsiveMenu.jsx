import { useUser, UserButton } from "@clerk/clerk-react";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setopenNav }) => {
    const { user } = useUser();

    return (
        <div className={`${openNav ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-20 flex h-screen flex-col justify-between bg-white px-8 py-6 pt-16 text-black md:hidden rounded-r-xl shadow-ms transition-all
     `}>
            <div>
                <div className='flex items-center justify-start gap-3 '>
                    {
                        user ? <UserButton size={50} /> : <FaUserCircle size={50} />
                    }
                    <div>
                        <h1>Hello, {user?.firstName || "Guest"}!</h1>
                        <h1 className="text-sm text-slate-500">Premium User</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="flex flex-col gap-7 text-2xl font-semibold">
                        <Link to={'/'} onClick={() => setopenNav(false)} className="transition-all"><li>Home</li></Link>
                        <Link to={'/about'} onClick={() => setopenNav(false)} className="transition-all"><li>About</li></Link>
                        <Link to={'/products'} onClick={() => setopenNav(false)} className="transition-all"><li>Products</li></Link>
                        <Link to={'/contact'} onClick={() => setopenNav(false)} className="transition-all"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveMenu