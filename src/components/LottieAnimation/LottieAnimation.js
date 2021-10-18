import React from 'react';

import { useEffect, useRef, useState } from 'react';
import { LottieContainer } from './LottieAnimationStyles';
import Lottie from 'react-lottie';
import animationData from '../../lotties/coder';
import { useMediaPredicate } from 'react-media-hook';

const LottieAnimation = (props) => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  var width = 900;
  // const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth]);
  // const [windowHeight, windowWidth] = windowSize;

  // if (windowWidth < 768) {
  // 	width = 650;
  // }
  // if (windowWidth < 640) {
  // 	width = 475;
  // }
  const small = useMediaPredicate('(max-width:640px)');
  const medium = useMediaPredicate('(max-width:768px)');
  if (small) {
    width = 475;
  } else if (medium) {
    width = 650;
  }

  return (
    <LottieContainer>
      <Lottie options={animationOptions} height={width} width={width} />
    </LottieContainer>
  );
};

export default LottieAnimation;
