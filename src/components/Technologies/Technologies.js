import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Chart from "react-apexcharts";

const Technologies = () => {
	var state = {
		options: {
			chart: {
				type: 'bar',
				height: 350
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					horizontal: true,
				}
			},
			dataLabels: {
				enabled: false
			},
			xaxis: {
				categories: ['C', 'Java', 'Python', 'Golang', 'Haskell', 'Kotlin', 'JavaScript', 'HTML', 'CSS'
				],
			}
		},
		series: [
			{
				name: "series-1",
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			}
		]
	};

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
						{/* <ListParagraph> */}
						<Chart
							options={state.options}
							series={state.series}
							type="bar"
							width="500"
						/>
						{/* </ListParagraph> */}
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture>
						<DiReact size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>Frameworks</ListTitle>
						<ListParagraph>
							Experience with <br />
							Node and Databases
						</ListParagraph>
					</ListContainer>
				</ListItem>

				<ListItem>
					<picture>
						<DiZend size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>Tools</ListTitle>
						<ListParagraph>
							Experience with <br />
							Figma
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
		</Section>
	);
};

export default Technologies;