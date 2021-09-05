import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I'm an enthusiastic Second Year computer scientist, eagerly looking to improve and broaden my skillset. 
      </SectionText>

      <Button onClick={() => window.location = 'https://www.google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;