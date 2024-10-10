import Link from 'next/link'
import React from 'react'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { CiBookmarkCheck } from 'react-icons/ci'
import { FaRoad } from 'react-icons/fa'
import { HiOutlineArrowUturnRight } from 'react-icons/hi2'
import { IoMdCall } from 'react-icons/io'

const AppBar = () => {
    return (
        <>
            <nav className=' lg:hidden block appbarNav  fixed bottom-0 z-[1999] py-3 bg-white shadow w-full '>
                <div className="icons w-full flex justify-evenly items-center gap-5">
                    <Link href="/booking" className='transition-all duration-300 flex gap-3 text-center activeBarTab bg-white justify-start px-1  py-2 rounded-full  items-center text-black overflow-hidden w-[57px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-12 w-full min-w-12 max-w-12 rounded-full flex justify-center items-center ">
                            <BsBookmarkPlusFill className='text-[1.3rem] text-black transition-all duration-300' />
                        </div>
                        <span className='text-[1rem] font-bold ps-3 text-nowrap'>Book</span>
                    </Link>
                    <Link href="/bookin" className='transition-all duration-300 flex gap-3 text-center activeBarTab bg-white justify-start px-1  py-2 rounded-full  items-center text-black overflow-hidden w-[57px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-12 w-full min-w-12 max-w-12 rounded-full flex justify-center items-center ">
                            <IoMdCall className='text-[1.3rem] text-black transition-all duration-300' />
                        </div>
                        <span className='text-[1rem] font-bold ps-3 text-nowrap'>Call</span>
                    </Link>
                    <Link href="/bookin" className='transition-all duration-300 flex gap-3 text-center activeBarTab bg-white justify-start px-1  py-2 rounded-full  items-center text-black overflow-hidden w-[57px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 transition-all duration-300 outline-offset-2 border-black border h-12 w-full min-w-12 max-w-12 rounded-full flex justify-center items-center ">
                            <FaRoad className='text-[1.3rem] text-black transition-all duration-300' />
                        </div>
                        <span className='text-[1rem] font-bold ps-3 text-nowrap'>My Ride</span>
                    </Link>
                    {/* 
                    <Link href="/bookin" className='flex justify-start gap-3 px-2 w-full  py-2 rounded-lg  items-center text-white overflow-hidden max-w-[58px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 outline-offset-2 border-black border  h-12 w-full min-w-12 max-w-12 rounded-full flex justify-center items-center ">
                            <IoMdCall className='text-[1.3rem] text-black *:' />
                        </div>
                        <span className='text-[1.3rem] font-bold'>Book</span>
                    </Link>

                    <Link href="/bookin" className='flex justify-start gap-3 px-2 w-full  py-2 rounded-lg  items-center text-white overflow-hidden max-w-[58px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 outline-offset-2 border-black border  h-12 w-full min-w-12 max-w-12 rounded-full flex justify-center items-center ">
                            <HiOutlineArrowUturnRight className='text-[1.3rem] text-black *:' />
                        </div>
                        <span className='text-[1.3rem] font-bold'>Book</span>
                    </Link> */}
                </div>
            </nav>
        </>
    )
}

export default AppBar
