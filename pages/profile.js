import { useState } from "react";
import { useTheme } from "next-themes";
import { Main, StyledHeading, HeadingWrapper } from "@/styles";
import Navbar from "@/components/Nav/Nav";

export default function ProfilePage() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <HeadingWrapper>
        <StyledHeading>Profile</StyledHeading>
      </HeadingWrapper>
      <Main style={{ marginTop: "5rem" }}>
        <div>
          <h2>Dark Mode</h2>
          <button onClick={handleThemeToggle}>
            {theme === "dark" ? "Turn off" : "Turn on"} Dark Mode
          </button>
        </div>
      </Main>
      <Navbar />
    </>
  );
}
