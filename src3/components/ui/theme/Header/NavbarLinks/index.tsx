import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import ToggleTheme from '..//ToggleTheme';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Wrapper, SocialIcons, NavLink } from './styles';
import React from 'react';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const { theme } = useTheme();

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#technologies">
        <NavLink>Technologies</NavLink>
      </Link>
      <Link href="#contact">
        <NavLink>Contact</NavLink>
      </Link>
      <SocialIcons>
        <ToggleTheme />
      </SocialIcons>
      <SocialIcons href="https://github.com/KrishanSritharar2000">
        <AiFillGithub size="2rem" />
        {/* {{color:"white"}} */}
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/krishan-sritharar">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
    </Wrapper>
  );
};

export default NavbarLinks;
