import styled from 'styled-components'
import {
  font16,
  font24,
  font32,
  fontWeight500,
  fontWeight600,
} from '../../common/design-token'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'

const GitHubIcon = styled(FaGithub)`
  width: 1.5rem;
  height: 1.5rem;
`

const ArrowIcon = styled(FaArrowUpRightFromSquare)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 2rem;
`

const OuterContainer = styled.div`
  padding: 2rem 5rem;
  @media screen and (max-width: 767px) {
    padding: 2rem;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  border-radius: 1.5rem;
  border: 1px solid rgb(228, 238, 225);
  margin: 1rem 0 2.5rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    display: block;
  }
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`
const FirstContainer = styled.div`
  background: linear-gradient(
    140deg,
    rgba(237, 243, 244, 1) 31%,
    rgba(244, 239, 243, 1) 69%
  );
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

const SecondContainer = styled.div`
  padding: 1rem;
  font-size: ${font16};
  font-weight: ${fontWeight500};
  color: #43474d;
`

const ProjectHeadingText = styled.div`
  font-size: ${font32};
  font-weight: ${fontWeight600};
  padding: 0.25rem 1rem;

  background-color: #e4eef0;
  margin: 2rem auto;

  border-radius: 1.5rem;
  text-align: center;
  width: max-content;
`

const HeadText = styled.p`
  margin: 1rem;
  font-weight: ${fontWeight600};
  font-size: ${font24};
  color: #43474d;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  align-self: self-start;
  margin: 1rem 0;
`

const FirstContainerDextop = styled.div`
  background: linear-gradient(
    140deg,
    rgba(237, 243, 244, 1) 31%,
    rgba(244, 239, 243, 1) 69%
  );
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const FirstContainerMobile = styled.div`
  background: linear-gradient(
    140deg,
    rgba(237, 243, 244, 1) 31%,
    rgba(244, 239, 243, 1) 69%
  );
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  border-radius: 1.5rem;
  display: none;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`

const style = {
  OuterContainer,
  Container,
  Image,
  FirstContainer,
  SecondContainer,
  ProjectHeadingText,
  GitHubIcon,
  ArrowIcon,
  IconContainer,
  HeadText,
  FirstContainerMobile,
  FirstContainerDextop,
}

export default style
