import React, { useRef } from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
	ProjectCard,
	CardImage,
	CardBody,
	CardTitle,
	CardDescription,
	CardLangauges,
	HoverEffectButton,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';
import 'glider-js/glider.min.css';
import Glider, { GliderMethods } from 'react-glider';
import { useMediaPredicate } from 'react-media-hook';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import { BiTimeFive, BiGitBranch } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import Tilt from 'react-parallax-tilt';

const Projects = () => {



	const gliderRef = useRef(null);
	var slidesToShow;
	const small = useMediaPredicate('(max-width:640px)');
	const medium = useMediaPredicate('(max-width:1024px)');

	if (small) {
		slidesToShow = 1;
	} else if (medium) {
		slidesToShow = 2;
	} else {
		slidesToShow = 3;
	}
	return (
		<Section id="projects">
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
			<SectionText bolder>Here are some of the projects that I have worked on:</SectionText>
			<>
				<Glider style={{ margin: "10px", }} slidesToScroll={1} slidesToShow={slidesToShow} draggable={true} hasDots={true} hasArrows={true}>
					{projects.map(({ id, image, title, description, commits, branches, languages, url, live, time, teamSize }) => (
						<Tilt className="Tilt" scale={0.92}>
							<ProjectCard>
								<CardImage imgSrc={image}></CardImage>
								<CardBody>
									<div style={{ gridArea: 'bodyText' }}>
										<Stats commits={commits} branches={branches} time={time} people={teamSize} />
										<CardTitle>{title}</CardTitle>
										<CardDescription>{description}</CardDescription>
									</div>
									<CardLangauges>
										<h5
											style={{
												'font-weight': 'bold',
												'padding-top': 5,
												'font-size': '1.5rem',
												color: 'black',
											}}
										>
											Developed with
										</h5>
										<TagList>
											{' '}
											{languages.map((item, i) => (
												<Tag key={i}>{item}</Tag>
											))}{' '}
										</TagList>
									</CardLangauges>
								</CardBody>

								<CardButtons code={url} liveApp={live} />
							</ProjectCard>
						</Tilt>
					))}{' '}
				</Glider>
			</>
			<div style={{ 'display': 'flex', 'height': '100px', 'justify-content': 'center', 'padding-top': '25px', }} >
				<Button style={{'margin-bottom': '0px'}}
					onClick={() => (window.location = 'https://www.google.com')}>Discover More</Button>
			</div>
		</Section>
	);
};

// <BlogCard key={id}>
// <Img src={image} />
// <TitleContent>
//     <HeaderThree title>{title}</HeaderThree>
//     <Hr />
// </TitleContent>
// <CardInfo>{description}</CardInfo>
// <div style={{ 'margin-top': '10px' }}>
//     <TitleContent>Developed with</TitleContent>
//     <TagList>
//       {languages.map((item, i) => (
//         <Tag key={i}>{item}</Tag>
//       ))}
//     </TagList>
// </div>
// <UtilityList>
//     <Button alt href={url}>
//       Code
//     </Button>
//     <Button alt href={live}>
//       Live App
//     </Button>
// </UtilityList>
// </BlogCard> <ProjectCard> <CardImage imgSrc={image}></CardImage>

function Stats(props) {
	const iconStyle = {
		color: 'black',
		fontSize: '1.2em',
		marginRight: '5px',
	};
	const textStyle = {
		color: 'black',
	};
	return (
		<ul
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				padding: '5px 20px 5px 20px',
			}}
		>
			<Tag>
				<RiGitRepositoryCommitsLine style={iconStyle} />
				<span style={textStyle}>{props.commits}</span>
			</Tag>
			<Tag>
				<BiGitBranch style={iconStyle} />
				<span style={textStyle}>{props.branches}</span>
			</Tag>
			<Tag>
				<BiTimeFive style={iconStyle} />
				<span style={textStyle}>{props.time}</span>
			</Tag>
			<Tag>
				<BsPeopleFill style={iconStyle} />
				<span style={textStyle}>{props.people}</span>
			</Tag>
		</ul>
	);
}

function CardButtons(props) {
	const containerStyle = {
		gridArea: 'buttons',
		backgroundColor: 'blue',
		borderBottomLeftRadius: '15px',
		borderBottomRightRadius: '15px',
		display: 'flex',
		justifyContent: 'space-around',
	};

	return (
		<ul style={containerStyle}>
			<HoverEffectButton onClick={() => (window.location = props.code)} left>Code</HoverEffectButton>
			<HoverEffectButton onClick={() => (window.location = props.liveApp)} right>Live App</HoverEffectButton>
		</ul>
	);
}

export default Projects;
