import Link from 'next/link'
import React from 'react'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { CiBookmarkCheck } from 'react-icons/ci'
import { HiOutlineArrowUturnRight } from 'react-icons/hi2'
import { IoMdCall } from 'react-icons/io'

const AppBar = () => {
    return (
        <>
            <nav className=' lg:hidden block appbarNav  fixed bottom-0 z-[1999] py-3 bg-white shadow w-full '>
                <div className="icons w-full flex justify-around items-center gap-5">
                    <Link href="/bookin" className='flex justify-start gap-3 px-2 w-full  py-2 rounded-lg  items-center text-white overflow-hidden max-w-[52px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 outline-offset-2 border-black border  h-12 w-full min-w-full max-w-12 rounded-full flex justify-center items-center ">
                            <BsBookmarkPlusFill className='text-[1.3rem] text-black *:' />
                        </div>
                        <span className='text-[1.3rem] font-bold'>Book</span>
                    </Link>

                    <Link href="/bookin" className='flex justify-start gap-3 px-2 w-full  py-2 rounded-lg  items-center text-white overflow-hidden max-w-[52px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 outline-offset-2 border-black border  h-12 w-full min-w-full max-w-12 rounded-full flex justify-center items-center ">
                            <IoMdCall className='text-[1.3rem] text-black *:' />
                        </div>
                        <span className='text-[1.3rem] font-bold'>Book</span>
                    </Link>

                    <Link href="/bookin" className='flex justify-start gap-3 px-2 w-full  py-2 rounded-lg  items-center text-white overflow-hidden max-w-[52px]'>
                        <div className="cirdle outline outline-1 outline-zinc-900 outline-offset-2 border-black border  h-12 w-full min-w-full max-w-12 rounded-full flex justify-center items-center ">
                            <HiOutlineArrowUturnRight className='text-[1.3rem] text-black *:' />
                        </div>
                        <span className='text-[1.3rem] font-bold'>Book</span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default AppBar
