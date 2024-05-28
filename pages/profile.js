import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { Main, StyledHeading, HeadingWrapper } from "@/styles";
import Navbar from "@/components/Nav/Nav";
import Link from "next/link";

export const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Center the content horizontally
  gap: 1rem;
`;

export const StyledToggleButton = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "var(--secondary-color)" : "var(--primary-color)"};
  border-radius: 34px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid
    ${({ theme }) =>
      theme === "dark" ? "var(--primary-color)" : "var(--secondary-color)"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #000; /* Set the circle to black */
    border-radius: 50%;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) =>
    theme === "dark"
      ? `
        &.active {
          background-color: var(--primary-color);
          border-color: var(--secondary-color);
          &:before {
            transform: translateX(28px) translateY(-50%);
          }
        }
      `
      : `
        &.active {
          background-color: var(--secondary-color);
          border-color: var(--primary-color);
          &:before {
            transform: translateX(28px) translateY(-50%);
          }
        }
      `}
`;

export default function ProfilePage() {
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(theme === "dark");

  const handleThemeToggle = () => {
    setIsToggled((prevState) => !prevState);
    setTheme(isToggled ? "light" : "dark");
  };

  return (
    <>
      <HeadingWrapper>
        <StyledHeading>Profile</StyledHeading>
      </HeadingWrapper>
      <Main style={{ marginTop: "5rem" }}>
        <ToggleButtonContainer>
          <h2>Dark Mode</h2>
          <StyledToggleButton
            className={isToggled ? "active" : ""}
            onClick={handleThemeToggle}
          />
        </ToggleButtonContainer>
        <ToggleButtonContainer>
          <Link href="/login">Sign In</Link>
        </ToggleButtonContainer>
        <ToggleButtonContainer>
          <Link href="/signup">Sign Up</Link>
        </ToggleButtonContainer>
      </Main>
      <Navbar />
    </>
  );
}
