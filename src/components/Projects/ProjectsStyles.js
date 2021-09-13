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
  padding-top: 1rem;
`;
export const Tag = styled.li`
  display: flex;
  align-items: center;
  color: black;
  font-size: 1.5rem;
	font-family: 'Lato';
	font-weight: 500;
`;

export const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 210px 230px 60px;
  grid-template-areas: 'image' 'body' 'buttons';
	// margin-left: 20px;
  border-radius: 18px;
  // box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;
`;

export const CardImage = styled.div`
  grid-area: image;
  background: url(${(props) => props.imgSrc});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardBody = styled.div`
  grid-area: body;
	display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 170px 60px;
  grid-template-areas: 'bodyText' 'bodyLanguages';
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
`;

export const CardTitle = styled.h2`
	grid-area: bodyText;
  font-size: 2.5rem;
  color: black;
`;

export const CardDescription = styled.p`
	margin: 10px 25px 0px 25px;
  color: grey;
  font-size: 15px;
  font-weight: 500;
  color: black;
	font-family: 'Lato';
`;

export const CardLangauges = styled.div`
  grid-area: bodyLanguages;
	// background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
`;

export const HoverEffectButton = styled.button`
	text-decoration: none;
	border: 0px solid rgb(146, 148, 248);
	position: relative;
	overflow: hidden;
	width: 100%;
	border-bottom-left-radius: ${(props) => props.left ? "15px" : "0px"};
	border-bottom-right-radius: ${(props) => props.right ? "15px" : "0px"};
	color: white;
	font-weight: bold;
	font-size: 22px;
	text-align: center;
	transition: transform .4s;
	background : ${(props) => props.left ? "linear-gradient(90deg, rgba(207,206,223,1) 0%, rgba(157,157,231,1) 31%, rgba(115,166,238,1) 54%, rgba(76,209,236,1) 100%)" :
								"linear-gradient(90deg, rgba(76,209,236,1) 0%, rgba(115,166,238,1) 46%, rgba(157,157,231,1) 69%, rgba(207,206,223,1) 100%)"};
	
	&:hover {
		font-size: 24px;
		// box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
	}

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			120deg,
			transparent,
			// rgba(146, 148, 248, 0.4),
			rgba(239,182,69,0.4),
			transparent
		);
		transition: all 650ms;
	}

	&:hover:before {
		left: 100%;
	}
`;
