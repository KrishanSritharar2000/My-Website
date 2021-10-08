import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { GoTerminal } from 'react-icons/go';
import { mailAddressLink, gitHubAddress, linkedInAddress } from '../../constants/constants';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white'}}>
          <GoTerminal size="3rem" style={{marginBottom: '20px'}}/>
          <Span>Krishan Sritharar</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li> */}
    </Div2>

    <Div3>
      <SocialIcons href={mailAddressLink}>
        <AiOutlineMail size="3rem" />
      </SocialIcons>
      <SocialIcons href={gitHubAddress}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={linkedInAddress}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
