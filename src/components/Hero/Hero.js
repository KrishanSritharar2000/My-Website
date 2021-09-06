import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useEffect, useRef } from "react";
import Typed from 'typed.js'

const Hero = (props) => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				"Hello ツ",
				"Welcome to my website",
				"I am Krishan",
				"I am a Software Engineer",
				"I am a Web Developer",
				"I am an App Developer",
				"I am a Teaching Assistant",
				"I am an all rounder Computer Scientist",
			],
			startDelay: 750,
			typeSpeed: 100,
			backSpeed: 80,
			backDelay: 750,
			loop: true,
			smartBackspace: true,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					<span ref={el}></span>
				</SectionTitle>
				<SectionText>
					I am an enthusiastic Second Year computer scientist, eagerly looking to improve and broaden my skillset.
				</SectionText>

				<Button onClick={() => (window.location = 'https://www.google.com')}>Learn More</Button>
			</LeftSection>
			<script>

			</script>
		</Section>
	)
};

export default Hero;
