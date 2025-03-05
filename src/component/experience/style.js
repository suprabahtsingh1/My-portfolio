import styled from 'styled-components'
import {
  smallDesktop,
  font16,
  fontWeight500,
  fontWeight600,
  font32,
} from '../../common/design-token'

const OuterContainer = styled.div`
  max-width: ${smallDesktop};
  // border: 1px solid red;
  background: linear-gradient(
    140deg,
    rgba(237, 243, 244, 1) 31%,
    rgba(244, 239, 243, 1) 69%
  );
  margin: 0 auto;
  padding: 2rem 3rem;
  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`

const ExperienceText = styled.div`
  font-size: ${font32};
  font-weight: ${fontWeight600};
  padding: 0.25rem 1rem;
  margin: 0 auto;
  background-color: #e4eef0;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  text-align: center;
  width: fit-content;
`

const Container = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-gap: 1rem;
  padding: 1.5rem;
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  border-radius: 1rem;
  @media screen and (max-width: 767px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    padding: 0.75rem;
  }
`
const Logo = styled.img`
  max-width: 8rem;
`
const Text = styled.p`
  margin: 0.5rem 0;
  font-weight: ${fontWeight500};
  font-size: ${font16};
  color: #43474d;
`

const style = {
  OuterContainer,
  ExperienceText,
  Container,
  Logo,
  Text,
}

export default style
