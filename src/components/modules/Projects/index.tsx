import { useTheme } from 'providers/ThemeProvider';
import { Commit, Ref, Maybe } from 'generated/graphql';
import { Card, TitleWrap } from 'components/ui/Card';
import Container from 'components/ui/Container';
import Fork from 'components/ui/Icons/Fork';
import Star from 'components/ui/Icons/Star';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import { Respository } from 'pages';

const Projects = ({ data }: { data: Respository[] }) => {
  const { theme } = useTheme();
  var num = 0;
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {data &&
          data.map((node) => {
            if (!node) return null;
            return (
              <Item key={num++} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
                <Card theme={theme}>
                  <Content>
                    <h3>{node.name}</h3>
                    <p>{node.description}</p>
                  </Content>
                  <TitleWrap>
                    <Stats theme={theme} stars>
                      <div>
                        <Star color={theme === 'light' ? '#000' : '#fff'} />
                        <span>{node.commits}</span>
                      </div>
                      <div>
                        <Fork color={theme === 'light' ? '#000' : '#fff'} />
                        <span>{node.branches}</span>
                      </div>
                    </Stats>
                    <Stats theme={theme}>
                      <Languages theme={theme}>
                        {node.languages.map((item) => (
                          <span key={num++}>{item}</span>
                        ))}
                      </Languages>
                    </Stats>
                  </TitleWrap>
                </Card>
              </Item>
            );
          })}
      </Grid>
    </Wrapper>
  );
};

function getCommits({ branch }: { branch: Maybe<Ref> | undefined }) {
  if (branch == null) {
    return 10;
  }
  return (branch!!.target!! as Commit).history.totalCount;
}

export default Projects;
