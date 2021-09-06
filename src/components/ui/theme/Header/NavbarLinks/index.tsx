import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import ToggleTheme from '..//ToggleTheme';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Wrapper, SocialIcons, Div3 } from './styles';
import React from 'react';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const { theme } = useTheme();

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="#about">
        <a>About</a>
      </Link>
      <Link href="#projects">
        <a>Projects</a>
      </Link>
      <Link href="#technologies">
        <a>Technologies</a>
      </Link>
      <Link href="#contact">
        <a>Contact</a>
      </Link>
      {/* <Div3> */}
      <SocialIcons>
        <ToggleTheme />
      </SocialIcons>
      <SocialIcons href="https://github.com/KrishanSritharar2000">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/krishan-sritharar">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>

      {/* </Div3> */}
    </Wrapper>
  );
};

export default NavbarLinks;
