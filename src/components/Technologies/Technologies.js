import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {languageChartState, frameworkChartState, toolsChartState} from '../../constants/charts.js'
import dynamic from 'next/dynamic'

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

const Technologies = () => {


	return (
		<Section id="technologies">
			<SectionDivider />
			<br />
			<SectionTitle>Technologies</SectionTitle>
			<SectionText>I have worked with a range on technologies.</SectionText>
			<List>
				<ListItem>
					<picture>
						<DiFirebase size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>Languages</ListTitle>
						<Chart
							options={languageChartState.options}
							series={languageChartState.series}
							type="bar"
							width="500"
							height="350"
						/>
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture>
						<DiReact size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>Frameworks</ListTitle>
						<Chart
							options={frameworkChartState.options}
							series={frameworkChartState.series}
							type="radialBar"
							width="500"
							height="350"
						/>
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture>
						<DiZend size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>Tools</ListTitle>
						<Chart
							options={toolsChartState.options}
							series={toolsChartState.series}
							type="bar"
							width="500"
							height="350"
						/>
					</ListContainer>
				</ListItem>
			</List>
		</Section>
	);
};

export default Technologies;