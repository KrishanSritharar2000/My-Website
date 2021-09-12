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
	CardButtons,

} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';
import 'glider-js/glider.min.css';
import Glider, { GliderMethods } from 'react-glider';
import { useMediaPredicate } from 'react-media-hook';
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { BiTimeFive, BiGitBranch } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";


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
		<Section nopadding id="projects">
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
			<>
				<Glider slidesToScroll={1} slidesToShow={slidesToShow} draggable={true} hasDots={true} hasArrows={true}>
					{projects.map(({ id, image, title, description, commits, branches, languages, url, live }) => (
						// <BlogCard key={id}>
						//   <Img src={image} />
						//   <TitleContent>
						//     <HeaderThree title>{title}</HeaderThree>
						//     <Hr />
						//   </TitleContent>
						//   <CardInfo>{description}</CardInfo>
						//   <div style={{ 'margin-top': '10px' }}>
						//     <TitleContent>Developed with</TitleContent>
						//     <TagList>
						//       {languages.map((item, i) => (
						//         <Tag key={i}>{item}</Tag>
						//       ))}
						//     </TagList>
						//   </div>
						//   <UtilityList>
						//     <Button alt href={url}>
						//       Code
						//     </Button>
						//     <Button alt href={live}>
						//       Live App
						//     </Button>
						//   </UtilityList>
						// </BlogCard>
						<ProjectCard>
							<CardImage imgSrc={image}>
							</CardImage>
							<CardBody>
								<Stats commits={commits} branches={branches} time="2 Months" people={1} />
								<CardTitle>{title}</CardTitle>
								<CardDescription>{description}</CardDescription>
							</CardBody>
							<CardLangauges>
								<h5 style={{ 'font-weight': 'bold', 'padding-top': 5 }}>Developed with</h5>
								<TagList>
									{languages.map((item, i) => (
										<Tag key={i}>{item}</Tag>
									))}
								</TagList>
							</CardLangauges>
							<CardButtons></CardButtons>
						</ProjectCard>
					))}
				</Glider>
			</>
		</Section>
	);
};

function Stats(props) {
	const iconStyle = { color: "#9e7575", fontSize: "1.2em", marginRight: "5px" }
	const textStyle = { color: "black" }
	return (
		<ul style={{ display: 'flex', justifyContent: 'space-around', padding: '5px 20px 5px 20px' }}>
			<Tag><RiGitRepositoryCommitsLine style={iconStyle} /> <span style={textStyle}>{props.commits}</span></Tag>
			<Tag><BiGitBranch style={iconStyle} /> <span style={textStyle}>{props.branches}</span></Tag>
			<Tag><BiTimeFive style={iconStyle} /> <span style={textStyle}>{props.time}</span></Tag>
			<Tag><BsPeopleFill style={iconStyle} /> <span style={textStyle}>{props.people}</span></Tag>
		</ul>
	)
}

export default Projects;
