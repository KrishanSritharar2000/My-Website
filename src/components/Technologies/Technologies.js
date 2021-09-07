import React, { useRef } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { languageChartState, frameworkChartState, toolsChartState } from '../../constants/charts.js'
import dynamic from 'next/dynamic'
import Glider, { GliderMethods } from 'react-glider';
import { isMobile } from 'react-device-detect';

const Chart = dynamic(
	() => import('react-apexcharts'),
	{ ssr: false }
)

const Technologies = () => {
	const gliderRef = useRef(null);
	var slidesToShow;
	if (isMobile) {
		slidesToShow = 1;
	} else {
		slidesToShow = 3;
	}
	return (
		<Section id="technologies">
			<SectionDivider />
			<br />
			<SectionTitle>Technologies</SectionTitle>
			<SectionText>I have worked with a range on technologies.</SectionText>
			<>
				<Glider
					slidesToScroll={1}
					slidesToShow={slidesToShow}
					draggable={true}
					hasDots={true}
					hasArrows={true}
				>
					<ListContainer>
						<ListTitle>
							<picture>
								<DiFirebase size="3rem" />
							</picture>Languages
						</ListTitle>
						<Chart
							options={languageChartState.options}
							series={languageChartState.series}
							type="bar"
							width="500"
							height="350"
						/>
					</ListContainer>

					<ListContainer>
						<ListTitle>
							<picture>
								<DiReact size="3rem" />
							</picture>Frameworks
						</ListTitle>
						<Chart
							options={frameworkChartState.options}
							series={frameworkChartState.series}
							type="radialBar"
							width="500"
							height="350"
						/>
					</ListContainer>

					<ListContainer>
						<ListTitle>
							<picture>
								<DiZend size="3rem" />
							</picture>Tools
						</ListTitle>
						<Chart
							options={toolsChartState.options}
							series={toolsChartState.series}
							type="bar"
							width="500"
							height="350"
						/>
					</ListContainer>

				</Glider>
			</>
		</Section>
	);
};

export default Technologies;