import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signIn("github", { callbackUrl: "/" });
    router.push("/");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign in with GitHub</button>
    </div>
  );
}
