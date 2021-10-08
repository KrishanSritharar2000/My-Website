import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { GoMail } from "react-icons/go";
import { SocialIcons, Div3 } from '../Header/HeaderStyles';
import { mailAddressLink, gitHubAddress, linkedInAddress } from '../../constants/constants';
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
			</LinkList>
		</FooterWrapper>
	);
};

export default Footer;
