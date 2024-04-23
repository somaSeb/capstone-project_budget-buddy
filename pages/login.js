// default export needed here otherwhise Error: The default export is not a React Component in page: "/login"

import Navbar from "@/components/Nav/Nav";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      {/* <button onClick={() => signIn("github")}>Sign in with GitHub</button> */}
      <Navbar />
    </>
  );
}
