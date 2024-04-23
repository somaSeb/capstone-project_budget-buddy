import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { Main, StyledHeading, HeadingWrapper } from "@/styles";
import Navbar from "@/components/Nav/Nav";

export const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Center the content horizontally
  gap: 1rem;
`;

export const StyledToggleButton = styled.button`
  background-color: ${({ theme }) =>
    theme === "dark" ? "var(--secondary-color)" : "var(--primary-color)"};
  color: ${({ theme }) =>
    theme === "dark" ? "var(--primary-color)" : "var(--secondary-color)"};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

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
        <ToggleButtonContainer>
          <h2>Dark Mode</h2>
          <StyledToggleButton onClick={handleThemeToggle}>
            {theme === "dark" ? "Turn off" : "Turn on"} Dark Mode
          </StyledToggleButton>
        </ToggleButtonContainer>
      </Main>
      <Navbar />
    </>
  );
}
