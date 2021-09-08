import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { typingStrings } from '../../constants/constants.js';
import Lottie from 'react-lottie';
import animationData from '../../lotties/coder';

const Hero = (props) => {
  const typing = useRef(null);

  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: typingStrings,
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
        <SectionTitle main center style={{ zIndex: 10 }}>
          <span ref={typing}></span>
        </SectionTitle>
        <SectionText style={{ paddingBottom: '0px', zIndex: 10 }}>
          I am an enthusiastic Second Year computer scientist, eagerly looking to improve and broaden my skillset.
        </SectionText>

        {/* <Button onClick={() => (window.location = 'https://www.google.com')}>Learn More</Button> */}
      </LeftSection>
    </Section>
  );
};

export default Hero;
