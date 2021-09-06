import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';
import { repos } from 'constants/constants';

const HomePage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects data={repos} />
    <Skills />
    <Contact />
  </Layout>
);

export default HomePage;
