import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <>      
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Continue with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">Continue with GitHub</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("facebook");
        }}
      >
        <button type="submit">Continue with Facebook</button>
      </form>
      
    </>
  );
}
