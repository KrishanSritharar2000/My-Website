import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  // height: 100%;
	height: 250px;
  object-fit: cover;
  overflow: hidden;
`;
// repeat(auto-fill, minmax(400px, 1fr));
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-auto-flow: row;
  overflow-y: auto;
  overflow-x: scroll;
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
	margin-right: 20px;
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
  width: 450px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const ProjectCard = styled.div`
	display: grid;
	grid-template-columns: 350px;
	grid-template-rows: 210px 210px 80px;
	grid-template-areas: "image" "body" "languages";


	border-radius: 18px;
	// box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
	font-family: roboto;
	text-align: center;
`;

export const CardImage = styled.div`
	grid-area: image;
	background: url(${(props) => (props.imgSrc)});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardBody = styled.div`
	grid-area: body;
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);

`;

export const CardTitle = styled.h2`
	margin: 25px;
	font-size:28px;
`;

export const CardDescription = styled.p`
	color: grey;
	font-size:15px;
	font-weight: 300;
`;

export const CardLangauges = styled.div`
	grid-area: languages;
	background-color: blue;
	border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
	// background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);


`;