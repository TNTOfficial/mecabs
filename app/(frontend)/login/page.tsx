import SignIn from "../components/sign-in";
import LoginForm from "../components/login-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoMailOutline } from "react-icons/io5";
import { FaApple, FaCheck, FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import signbg from "@/public/singbg.jpg"
import signcard from "@/public/singcard2.jpg"
import Image from "next/image";
import { IoIosArrowRoundBack, IoMdCheckmark } from "react-icons/io";
export default function LoginPage() {
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${signbg.src})` }} className="bg-zinc-100 w-full py-[100px] min-h-[calc(100vh_-_71px)] bg-no-repeat bg-center bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[-1]">
        <div className="container max-w-screen-xl h-full">
          <div className="flex  justify-center h-full items-stretch rounded-3xl bg-white overflow-hidden">
            <div className="w-[calc(100%_/_2)]">
              <div className="card h-full relative z-0">
                <Image src={signcard} alt="" className="h-full w-full object-cover" />
                <div className="card_body bg-black bg-opacity-40 absolute top-0 start-0 h-full w-full px-14 pb-14 pt-[70px] flex justify-center items-start flex-col">
                  <h1 className="text-white text-[3rem] font-bold text-center">Success starts here</h1>
                  <ul className="list-none mt-10">
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Over 700 categories</span>
                    </li>
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Quality work done faster</span>
                    </li>
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Access to talent and businesses across the globe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%_/_2)]">
              <div className="flex flex-col h-full items-stretch justify-between pb-14 pt-[70px] px-14">
                <div className="formCheck ">
                  <h2 className="text-[2rem] text-black font-bold">
                    Sign in to your account
                  </h2>
                  <h5 className="text-[1.2rem] text-black font-normal">
                    Don’t have an account?
                    <Link className="font-medium underline px-3" href="">
                      Sign Up.
                    </Link>
                  </h5>

                  <div className="pt-10">
                    <button
                      type="button"
                      className="flex justify-between items-center w-full px-10 py-3 border rounded-xl mb-3"
                    >
                      <div className="icon w-[15%] text-center">
                        <FcGoogle className="text-[1.8rem] " />
                      </div>
                      <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                        Continue with Google
                      </span>
                    </button>

                    <button
                      type="button"
                      className="flex justify-between items-center w-full px-10 py-3 border rounded-xl"
                    >
                      <div className="icon w-[15%] text-center">
                        <IoMailOutline className="text-[1.8rem] text-black " />
                      </div>
                      <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                        Continue with email/username
                      </span>
                    </button>

                    <p className="text-[1.1rem] text-zinc-500 text-center font-semibold py-5">
                      OR
                    </p>
                    <div className="flex gap-5">
                      <button
                        type="button"
                        className="flex justify-between items-center w-[50%] px-10 py-3 border rounded-xl"
                      >
                        <div className="icon w-[15%] text-center">
                          <AiOutlineGithub className="text-[1.8rem] text-black" />
                        </div>
                        <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                          GitHub
                        </span>
                      </button>

                      <button
                        type="button"
                        className="flex justify-between items-center w-[50%] px-10 py-3 border rounded-xl"
                      >
                        <div className="icon w-[15%] text-center">
                          <FaFacebookF className="text-[1.3rem] text-blue-700" />
                        </div>
                        <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                          Facebook
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-[1.1rem] font-medium">
                  By joining, you agree to the Fiverr
                  <Link href="/terms" className="text-black underline">
                    Terms of Service
                  </Link>
                  and to occasionally receive emails from us. Please read our
                  <Link className="text-black underline" href="/policy">
                    Privacy Policy
                  </Link>
                  to learn how we use your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: ` url(${signbg.src})` }} className="bg-zinc-100 w-full py-[100px] min-h-[calc(100vh_-_71px)] bg-no-repeat bg-center bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[-1]">
        <div className="container max-w-screen-xl h-full">
          <div className="flex  justify-center h-full items-stretch rounded-3xl bg-white overflow-hidden">
            <div className="w-[calc(100%_/_2)]">
              <div className="card h-full relative z-0">
                <Image src={signcard} alt="" className="h-full w-full object-cover" />
                <div className="card_body bg-black bg-opacity-40 absolute top-0 start-0 h-full w-full px-14 pb-14 pt-[70px] flex justify-center items-start flex-col">
                  <h1 className="text-white text-[3rem] font-bold text-center">Success starts here</h1>
                  <ul className="list-none mt-10">
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Over 700 categories</span>
                    </li>
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Quality work done faster</span>
                    </li>
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Access to talent and businesses across the globe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%_/_2)]">
              <div className="flex flex-col h-full items-stretch justify-between py-[70px] px-14">
                <div className="formCheck ">
                    <button className="text-black bg-transparent border-none mb-5 flex justify-srart items-center -ml-5">
                      <IoIosArrowRoundBack className="text-[2.3rem] text-black" />
                      <span className="text-[1.3rem]">Back</span>
                    </button>
                  <h2 className="text-[2rem] text-black font-bold mb-5">
                    Continue with your email
                  </h2>

                  <div className="mb-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-1 text-[1.3rem] font-semibold text-gray-900 dark:text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-transparent border border-gray-300 text-gray-900 text-[1.2rem] rounded-lg focus:ring- focus:border-gray-400 block w-full py-3 px-2.5"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-1 text-[1.3rem] font-semibold text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-transparent border border-gray-300 text-gray-900 text-[1.2rem] rounded-lg focus:ring- focus:border-gray-400 block w-full py-3 px-2.5"
                      placeholder="John"
                      required
                    />
                  </div>

                  <ul className="list-none">
                    <li className="flex justify-start items-center gap-3 text-gray-500 text-[1.2rem] font-medium">
                      <CiCircleCheck className="text-[1.6rem]" />
                      <span>At least 8 characters</span>
                    </li>
                    <li className="flex justify-start items-center gap-3 text-gray-500 text-[1.2rem] font-medium">
                      <CiCircleCheck className="text-[1.6rem]" />
                      <span>At least 1 uppercase letter</span>
                    </li>
                    <li className="flex justify-start items-center gap-3 text-gray-500 text-[1.2rem] font-medium">
                      <CiCircleCheck className="text-[1.6rem]" />
                      <span>At least 1 lowercase letter</span>
                    </li>
                    <li className="flex justify-start items-center gap-3 text-gray-500 text-[1.2rem] font-medium">
                      <CiCircleCheck className="text-[1.6rem]" />
                      <span>At least 1 number</span>
                    </li>
                  </ul>

                  <button className="bg-gray-900 mt-10 border-gray-300 text-white text-[1.2rem] rounded-lg focus:ring- focus:border-gray-400 block w-full py-3 px-2.5">
                    Continue
                  </button>
                </div>

                <p className="text-[1.1rem] font-medium">
                  By joining, you agree to the Fiverr
                  <Link href="/terms" className="text-black underline">
                    Terms of Service
                  </Link>
                  and to occasionally receive emails from us. Please read our
                  <Link className="text-black underline" href="/policy">
                    Privacy Policy
                  </Link>
                  to learn how we use your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: ` url(${signbg.src})` }} className="bg-zinc-100 w-full py-[100px] min-h-[calc(100vh_-_71px)] bg-no-repeat bg-center bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-50 after:z-[-1]">
        <div className="container max-w-screen-xl h-full">
          <div className="flex  justify-center h-full items-stretch rounded-3xl bg-white overflow-hidden">
            <div className="w-[calc(100%_/_2)]">
              <div className="card h-full relative z-0">
                <Image src={signcard} alt="" className="h-full w-full object-cover" />
                <div className="card_body bg-black bg-opacity-40 absolute top-0 start-0 h-full w-full px-14 pb-14 pt-[70px] flex justify-center items-start flex-col">
                  <h1 className="text-white text-[3rem] font-bold text-center">Success starts here</h1>
                  <ul className="list-none mt-10">
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Over 700 categories</span>
                    </li>
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Quality work done faster</span>
                    </li>
                    <li className="flex justify-start items-start gap-3 text-white text-[1.2rem] font-medium mb-5">
                      <IoMdCheckmark className="text-[1.4rem]" />
                      <span className="text-[1.6rem]">Access to talent and businesses across the globe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%_/_2)]">
              <div className="flex flex-col h-full items-stretch justify-between py-[70px] px-14">
                <div className="formCheck ">
                    <button className="text-black bg-transparent border-none mb-5 flex justify-srart items-center -ml-5">
                      <IoIosArrowRoundBack className="text-[2.3rem] text-black" />
                      <span className="text-[1.3rem]">Back</span>
                    </button>
                  <h2 className="text-[2rem] text-black font-bold mb-2">
                    Get your profile started
                  </h2>

                  <h5 className="text-[1.3rem] leading-[1.3rem] mb-2 text-gray-600 font-normal">
                    Add a username that's unique to you, this is how you'll appear to others.
                  </h5>

                  <h5 className="text-[1.2rem] font-semibold text-black mb-7">
                    You can't change your username, so choose wisely.
                  </h5>

                  <div className="mb-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-1 text-[1.3rem] font-semibold text-gray-900 dark:text-white"
                    >
                      Choose a username
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-transparent border border-gray-300 text-gray-900 text-[1.2rem] rounded-lg focus:ring- focus:border-gray-400 block w-full py-3 px-2.5"
                      placeholder="John"
                      required
                    />
                  </div>
                  <p className="text-[1.2rem] font-medium text-gray-600">Build trust by using your full name or business name</p>

                  <button className="bg-gray-900 mt-10 border-gray-300 text-white text-[1.2rem] rounded-lg focus:ring- focus:border-gray-400 block w-full py-3 px-2.5">
                    Continue
                  </button>
                </div>

                <p className="text-[1.1rem] font-medium">
                  By joining, you agree to the Fiverr
                  <Link href="/terms" className="text-black underline">
                    Terms of Service
                  </Link>
                  and to occasionally receive emails from us. Please read our
                  <Link className="text-black underline" href="/policy">
                    Privacy Policy
                  </Link>
                  to learn how we use your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <LoginForm>
            <SignIn></SignIn>
          </LoginForm>
        </div>
      </main>
    </>
  );
}
