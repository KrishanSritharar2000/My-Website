import Acomplishments from '../../src/components/Acomplishments/Acomplishments';
import BgAnimation from '../../src/components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../../src/components/Hero/Hero';
import Projects from '../../src/components/Projects/Projects';
import Technologies from '../../src/components/Technologies/Technologies';
import Timeline from '../../src/components/TimeLine/TimeLine';
import LottieAnimation from '../../src/components/LottieAnimation/LottieAnimation';
import { Layout } from '../../src/layout/Layout';
import { Section, LottieContainer } from '../../src/styles/GlobalComponents';
import { repos } from '../../src/constants/constants.js';

const Home = () => {


	return (
		<Layout>
			<LottieAnimation />
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Projects data={repos} />
			<Technologies />
			<Timeline />
			<Acomplishments />
		</Layout>
	);
};

export default Home;
