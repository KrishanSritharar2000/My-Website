import React, { useRef } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { languageChartState, frameworkChartState, toolsChartState } from '../../constants/charts.js';
import dynamic from 'next/dynamic';
import Glider, { GliderMethods } from 'react-glider';
import { useMediaPredicate } from 'react-media-hook';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Technologies = () => {
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
    <Section id="technologies">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked with a range on technologies, framework and have a large set of tools in my skill set. Here is a
        few of them:
      </SectionText>
      <>
        <Glider
          slidesToScroll={1}
          slidesToShow={slidesToShow}
          draggable={true}
          hasDots={slidesToShow != 3}
          hasArrows={slidesToShow != 3}
        >
          <ListContainer>
            <ListTitle>
              <picture>
                <DiFirebase size="3rem" />
              </picture>
              Languages
            </ListTitle>
            <Chart
              options={languageChartState.options}
              series={languageChartState.series}
              type="bar"
              // width="500"
              // height="350"
            />
          </ListContainer>

          <ListContainer>
            <ListTitle>
              <picture>
                <DiReact size="3rem" />
              </picture>
              Frameworks
            </ListTitle>
            <Chart
              options={frameworkChartState.options}
              series={frameworkChartState.series}
              type="radialBar"
              // width="500"
              // height="350"
            />
          </ListContainer>

          <ListContainer>
            <ListTitle>
              <picture>
                <DiZend size="3rem" />
              </picture>
              Tools
            </ListTitle>
            <Chart
              options={toolsChartState.options}
              series={toolsChartState.series}
              type="bar"
              // width="500"
              // height="350"
            />
          </ListContainer>
        </Glider>
      </>
    </Section>
  );
};

export default Technologies;
