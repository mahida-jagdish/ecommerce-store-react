import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CardContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";



export default function Navbar({location, getlocation, openDropdown, setOpenDropdown}) {

    const {cartItems} = useCart();
    const [openNav, setopenNav] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }
    return(
        <div className="bg-white shadow-2xl py-3 px-4 md:px-0">
            <div className="max-w-6xl mx-auto flex justify-between items-center ">
                {/* {logo section} */}
                <div className="flex items-center gap-7">
                    <Link to={'/'}><h1 className="font-bold text-3xl"><span className="text-bold text-red-500 font-serif">Z</span>aptro</h1></Link>

                    <div className="md:flex gap-1 cursor-pointer text-grey-700 items-center hidden">
                    <MapPin className="text-red-700"></MapPin>
                    <span className="font-semibold">{location ? <div className="-space-y-2">
                        <p>{location.country}</p>
                        <p>{location.state}</p>
                    </div> : "Add Address"}</span>
                    <FaCaretDown onClick={toggleDropdown}></FaCaretDown>
                    </div>

                    {
                    openDropdown ? <div className="w-[250px] h-max z-50 shadow-2xl bg-white fixed top-16 left-60 border-2 p-5 border-grey rounded-md">
                         <h1 className="font-semibold text-xl md-4 flex justify-between">Change location <span onClick={toggleDropdown}><CgClose></CgClose></span> </h1>
                         <button onClick={getlocation} className="bg-red-500 py-1 px-3 text-white rounded-md cursor-pointer hover:bg-red-400 mt-4">Detect my location</button>
                    </div> : null
                    }
                </div>
                {/* {Menu section} */}
                <nav className="flex gap-7 items-center">
                    <ul className=" md:flex gap-7 items-center text-xl font-semibold hidden">
                        <NavLink to={'/'} className={({isActive})=> isActive ? "border-b-3 transition-all border-red-500" : "text-black"}><li>Home</li></NavLink>
                        <NavLink to={'/about'} className={({isActive})=> isActive ? "border-b-3 transition-all border-red-500" : "text-black"}><li>About</li></NavLink>
                        <NavLink to={'/products'} className={({isActive})=> isActive ? "border-b-3 transition-all border-red-500" : "text-black"}><li>Products</li></NavLink>
                        <NavLink to={'/contact'} className={({isActive})=> isActive ? "border-b-3 transition-all border-red-500" : "text-black"}><li>Contact</li></NavLink>
                    </ul>
                    <Link to={"/card"} className="relative">
                    <IoCartOutline className="h-7 w-7"></IoCartOutline>
                    <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">{cartItems.length}</span>
                    </Link>
                    <div className="hidden md:block">
                        <SignedOut>
                            <SignInButton className="bg-red-500 px-3 py-1 rounded-md text-white"/>
                        </SignedOut>
                        <SignedIn >
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                    /* Mobile menu icon */
                    openNav ? <HiMenuAlt3 className='h-8 w-8 md:hidden' onClick={() => setopenNav(false)}/> : <HiMenuAlt1 onClick={() => setopenNav(true)} className='h-8 w-8 md:hidden'/>
                    }
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setopenNav={setopenNav}/>
        </div>
    );
}