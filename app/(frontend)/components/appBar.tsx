import Link from 'next/link'
import React from 'react'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { FaRoad } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'

const AppBar = () => {
    return (
        <>
            <nav className=' lg:hidden block appbarNav  fixed bottom-0 z-40 py-3 bg-white shadow w-full '>
                <div className="icons w-full flex justify-evenly items-center gap-5">
                    <Link href="/booking" className='transition-all duration-300 flex text-center activeBarTab  justify-start px-1  py-2 rounded-full  items-center overflow-hidden bg-blue-600 text-white w-[150px] ps-3 [&_svg]:text-white [&_.cirdle]:outline-white [&_.cirdle]:border-white'>
                        <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-10 w-full min-w-10 max-w-10 rounded-full flex justify-center items-center ">
                            <BsBookmarkPlusFill className='text-[1.3rem] text-black transition-all duration-300' />
                        </div>
                        <span className='text-[1rem] font-bold ps-3 text-nowrap'>Book</span>
                    </Link>
                    <Link href="/bookin" className='transition-all duration-300 flex text-center activeBarTab bg-white justify-start px-1  py-2 rounded-full  items-center text-black overflow-hidden w-[57px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-10 w-full min-w-10 max-w-10 rounded-full flex justify-center items-center ">
                            <IoMdCall className='text-[1.3rem] animate-[shake_1.5s_infinite] text-black transition-all' />
                        </div>
                        {/* <span className='text-[1rem] font-bold ps-3 text-nowrap'>Call</span> */}
                    </Link>
                    <Link href="/bookin"  className='transition-all duration-300 flex text-center activeBarTab  justify-start px-1  py-2 rounded-full  items-center overflow-hidden bg-blue-600 text-white w-[150px] ps-3 [&_svg]:text-white [&_.cirdle]:outline-white [&_.cirdle]:border-white'>
                        <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-10 w-full min-w-10 max-w-10 rounded-full flex justify-center items-center ">
                            <FaRoad className='text-[1.3rem] text-black transition-all duration-300' />
                        </div>
                        <span className='text-[1rem] font-bold px-3 text-nowrap'>My Ride</span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default AppBar
