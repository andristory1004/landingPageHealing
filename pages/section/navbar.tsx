import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed flex flex-wrap items-center justify-between w-full py-2 bg-black bg-opacity-75 md:bg-opacity-50 md:px-10">
            <div className="flex items-center justify-between w-full px-6 text-white container-fluid font-acme h-11">
                <a href="" className='font-acme'>
                    {/* <Image src="/images/Logo Pundi.png" alt="Logo Pundi" width={50} height={50} /> */}
                    {/* <img src="/images/logo_pundi2.png" alt="" className="h-12" /> */}
                    Healing Time
                </a>
                <div className='hidden space-x-4 md:flex md:flex-wrap'>
                    <Link href="#home">
                        <a className='transition hover:scale-125 hover:text-yellow1'>Home</a>
                    </Link>
                    <Link href="#about">
                        <a className='transition hover:scale-125 hover:text-yellow1'>About Us</a>
                    </Link>
                    <Link href="#feature">
                        <a className='transition hover:scale-125 hover:text-yellow1'>Feature</a>
                    </Link>
                    <Link href="#getApp">
                        <a className='transition hover:scale-125 hover:text-yellow1'>get App</a>
                    </Link>
                    <Link href="#ourTeam">
                        <a className='transition hover:scale-125 hover:text-yellow1'>Our Team</a>
                    </Link>
                    <Link href="#contact">
                        <a className='transition hover:scale-125 hover:text-yellow1'>Contact Us</a>
                    </Link>
                </div>

                <button className="md:hidden inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="w-full pt-3 md:hidden collapse" id="collapseExample">
                <div className="h-1 mx-5 bg-white rounded-full "></div>
                <div className="block p-6 space-y-3 text-white rounded-lg shadow-lg font-acme">
                    <div className="group">
                        <Link href="#home">
                            <a className='block transition hover:translate-x-3 group-hover:text-yellow1'>Home</a>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="#about">
                            <a className='block transition hover:translate-x-3 group-hover:text-yellow1'>About Us</a>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="#feature">
                            <a className='block transition hover:translate-x-3 group-hover:text-yellow1'>Feature</a>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="#getApp">
                            <a className='block transition hover:translate-x-3 group-hover:text-yellow1'>Get App</a>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="#ourTeam">
                            <a className='block transition hover:translate-x-3 group-hover:text-yellow1'>Our Team</a>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="#contact">
                            <a className='block transition hover:translate-x-3 hover:text-yellow1'>Contact Us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}