"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from '../hooks/useUser'
import Loading from './ui/Loading'

// Import necessary and updated icons
import { HiOutlineDotsVertical, HiOutlineUserCircle } from 'react-icons/hi' // Updated User and Dots icon
import { FiFolder } from 'react-icons/fi' // New icon for Folders
import { FaRegCaretSquareUp } from 'react-icons/fa'
import { PiSquaresFourBold } from 'react-icons/pi'


const DashboardSidebar = () => {
    const { data: user, isLoading } = useUser();
    const currentUser = { ...user };
    const pathName = usePathname();

    // Base styling for all links
    const linkBaseClasses = "w-full p-3 rounded-lg my-2 flex items-center text-white font-medium transition duration-150 ease-in-out";
    const activeClass = "bg-gray-700";
    const inactiveClass = "hover:bg-gray-800";

    const getLinkClasses = (href:string) =>
        `${linkBaseClasses} ${pathName === href ? activeClass : inactiveClass}`;

    return (
        // Retaining original width: w-1/5
        <aside className='w-1/5 bg-slate-900 min-h-screen p-6 flex flex-col justify-between text-[#EFF6FF]'>
            {isLoading && <Loading />}

            <div className="">
                {/* 🧭 Branding and Trial Counter */}
                <div className=" flex justify-between items-end pb-4 border-b border-slate-800">
                    {/* Retained original text size and color conventions */}
                    <h3 className='text-2xl font-semibold mt-3 text-[#EFF6FF]'>DocFeel</h3>
                    {/* Trial counter style retained but placed on its own line for clarity */}
                    <p className='text-sm font-semibold text-right'>{currentUser?.trialCount || 0} / 5 trials</p>
                </div>

                {/* 🔗 Navigation Links */}
                <ul className='mt-12 text-[#EFF6FF]'>
                    {/* Dashboard Link */}
                    <Link href="/dashboard" className={getLinkClasses("/dashboard")}>
                        <PiSquaresFourBold className="h-6 w-6 mr-3" /> Dashboard
                    </Link>

                    {/* Uploads Link */}
                    <Link href="/uploads" className={getLinkClasses("/uploads")}>
                        <FaRegCaretSquareUp className="h-6 w-6 mr-3" /> Uploads
                    </Link>
                    
                    {/* New "Folders" Sidebar Item with active state logic */}
                    <Link href="/folders" className={getLinkClasses("/folders")}>
                        <FiFolder className="h-6 w-6 mr-3" /> Folders
                    </Link>

                    {/* Analyses Completed Link with active state logic */}
                    {/* Note: Original code was missing the active state logic for this link, now added */}
                    {/* <Link href="/analyses" className={getLinkClasses("/analyses")}>
                        <LuClipboardList className="h-6 w-6 mr-3" /> Analyses Completed
                    </Link> */}
                </ul>
            </div>

            {/* 👤 User Profile Section */}
            {/* Added a subtle border-t separator for better visual structure */}
            <div className=" flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
                <div className="flex items-center space-x-3">
                    {/* Updated User Icon */}
                    <HiOutlineUserCircle className='text-5xl' />
                    <div className="">
                        {/* Retained original text size and color conventions */}
                        <h4 className='text-lg font-semibold'>{`${currentUser?.name || 'Guest'}`}</h4>
                        <p className='text-sm text-zinc-300 capitalize'>{currentUser.plan || 'Free'} user</p>
                    </div>
                </div>
                {/* Updated Dots Icon and wrapped in a button for interaction */}
                <button className='text-xl text-zinc-300 hover:text-white transition duration-150'>
                    <HiOutlineDotsVertical />
                </button>
            </div>
        </aside>
    )
}

export default DashboardSidebar