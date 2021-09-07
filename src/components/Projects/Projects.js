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
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';
import 'glider-js/glider.min.css';
import Glider, { GliderMethods } from 'react-glider';
import { useMediaPredicate } from 'react-media-hook';

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
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div style={{ 'margin-top': '10px' }}>
                <TitleContent>Developed with</TitleContent>
                <TagList>
                  {languages.map((item, i) => (
                    <Tag key={i}>{item}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <Button alt href={url}>
                  Code
                </Button>
                <Button alt href={live}>
                  Live App
                </Button>
              </UtilityList>
            </BlogCard>
          ))}
        </Glider>
      </>
    </Section>
  );
};

export default Projects;
