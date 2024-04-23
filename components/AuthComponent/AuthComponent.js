import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
