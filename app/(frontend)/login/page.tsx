import SignIn from "../components/sign-in";
import LoginForm from "../components/login-form";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import signbg from "@/public/singbg.jpg"
import signcard from "@/public/signcard4.jpg"
import user1 from "@/public/user1.jpg"
import user2 from "@/public/user3.jpg"
import Image from "next/image";
import { IoIosArrowRoundBack, IoMdCheckmark } from "react-icons/io";
export default function LoginPage() {
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${signbg.src})` }} className="bg-zinc-100 w-full py-[100px] min-h-[calc(100vh_-_71px)] bg-no-repeat bg-center bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-15 after:z-[-1]">
        <div className="container max-w-screen-xl h-full">
          <div className="flex flex-wrap justify-center h-full items-stretch rounded-3xl bg-white overflow-hidden">
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)]">
              <div className="card h-full relative z-0">
                <div className="img h-full min-h-[300px] max-h-[800px]">
                  <Image src={signcard} alt="" className="h-full w-full object-cover" />  
                </div>
                <div className="card_body bg-black bg-opacity-40 absolute top-0 start-0 h-full w-full px-14 pb-14 pt-[70px] flex justify-start items-start flex-col">
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
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)]">
              <div className="flex flex-col h-full items-stretch justify-between pb-14 pt-[70px] px-14">
                <div className="formCheck ">
                  <LoginForm>
                    <SignIn></SignIn>
                  </LoginForm>

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
        style={{ backgroundImage: ` url(${signbg.src})` }} className="bg-zinc-100 w-full py-[100px] min-h-[calc(100vh_-_71px)] bg-no-repeat bg-center bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-15 after:z-[-1]">
        <div className="container max-w-screen-xl h-full">
          <div className="flex  justify-center h-full items-stretch rounded-3xl bg-white overflow-hidden">
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)]">
              <div className="card h-full relative z-0">
                <Image src={signcard} alt="" className="h- max-h-[85vh] min-h-[30vh] w-full object-cover" />
                <div className="card_body bg-black bg-opacity-40 absolute top-0 start-0 h-full w-full px-14 pb-14 pt-[70px] flex justify-start items-start flex-col">
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
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)]">
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
        style={{ backgroundImage: ` url(${signbg.src})` }} className="bg-zinc-100 w-full py-[100px] min-h-[calc(100vh_-_71px)] bg-no-repeat bg-center bg-cover relative z-0 after:bg-black after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-opacity-15 after:z-[-1]">
        <div className="container max-w-screen-xl h-full">
          <div className="flex  justify-center h-full items-stretch rounded-3xl bg-white overflow-hidden">
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)]">
              <div className="card h-full relative z-0">
                <Image src={signcard} alt="" className="h- max-h-[85vh] min-h-[30vh] w-full object-cover" />
                <div className="card_body bg-black bg-opacity-40 absolute top-0 start-0 h-full w-full px-14 pb-14 pt-[70px] flex justify-start items-start flex-col">
                  <div className="profile w-full">
                    <div className="user1 mb-4 w-fit bg-white rounded-[50px] px-3 py-2 border border-gray-300 flex justify-start items-center gap-3">
                      <Image src={user1} alt="user1" className="h-14 min-w-14 max-w-14 w-full rounded-full object-cover" />
                      <span className="text-[1.1rem] text-black font-semibold px-2">Prince Riar</span>
                      <IoMdCheckmark className="text-[2rem] text-green-600" />
                    </div>
                    <div className="user1 w-fit mx-auto bg-white rounded-[50px] px-3 py-2 border border-gray-300 flex justify-start items-center gap-3">
                      <Image src={user2} alt="user1" className="h-14 min-w-14 max-w-14 w-full rounded-full object-cover" />
                      <span className="text-[1.1rem] text-black font-semibold px-2">liza</span>
                      <IoMdCheckmark className="text-[2rem] text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[calc(100%_/_2)] w-[calc(100%_/_1)]">
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
    </>
  );
}
