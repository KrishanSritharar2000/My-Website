import axios from 'axios';
import { GetStaticProps } from 'next';
import { RepositoryEdge } from 'generated/graphql';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';

const HomePage = ({ repos }: { repos: RepositoryEdge[] }) => (
  <Layout>
    <SEO />
    <Intro />
    <Projects data={repos} />
    <Skills />
    <Contact />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { data },
  } = await axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    data: {
      query: `
				query viewer {
					viewer {
						repositories(first: 9, orderBy: {field: CREATED_AT, direction: DESC}) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
									languages(first: 3) {
										nodes {
											id
											name
										}
									}
									defaultBranchRef {
										target {
											... on Commit {
												history {
													totalCount
												}
											}
										}
									}
								}
							}
						}
					}
				}
			`,
    },
    headers: {
      Authorization: `bearer `,
    },
  });

  return {
    props: {
      repos: data.viewer.repositories.edges,
    },
    revalidate: 10,
  };
};

export default HomePage;
