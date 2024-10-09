import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa";

export default function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
              type="submit"
              className="flex justify-between items-center w-full px-10 py-3 border rounded-xl mb-3"
            >
              <div className="icon w-[15%] text-center">
                <FcGoogle className="text-[1.8rem] " />
              </div>
              <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                Continue with Google
              </span>
            </button>            
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
              type="submit"
              className="flex justify-between items-center w-full px-10 py-3 border rounded-xl mb-3"
            >
              <div className="icon w-[15%] text-center">
                <FaXTwitter className="text-[1.8rem] " />
              </div>
              <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                Continue with twitter
              </span>
            </button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("facebook");
        }}
      >
        <button
              type="submit"
              className="flex justify-between items-center w-full px-10 py-3 border rounded-xl mb-3"
            >
              <div className="icon w-[15%] text-center">
                <FaFacebookF className="text-[1.8rem] text-blue-700" />
              </div>
              <span className="text-[1.2rem] font-semibold w-[80%] text-center text-nowrap">
                Continue with Facebook
              </span>
            </button>
      </form>
    </>
  );
}
