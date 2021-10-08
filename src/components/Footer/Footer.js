import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import { GoMail } from "react-icons/go";
import { SocialIcons, Div3 } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem href="">krishan.sritharar19@imperial.ac.uk</LinkItem>
        </LinkColumn>
        <Div3>
          <SocialIcons href="mailto:krishan.sritharar19@imperial.ac.uk">
            <AiOutlineMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/KrishanSritharar2000">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/krishan-sritharar">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </Div3>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
