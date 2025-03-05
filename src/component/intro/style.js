import styled from 'styled-components'
import {
  fontWeight700,
  smallDesktop,
  font48,
  font16,
  fontWeight500,
} from '../../common/design-token'
import { ImLocation2 } from 'react-icons/im'
import { RiLinkedinFill } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'

import { PiHandWavingFill } from 'react-icons/pi'

const HandWaving = styled(PiHandWavingFill)`
  width: 5rem;
  height: 5rem;
  color: rgb(236, 240, 0);
  margin-left: 1.5rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const LinkedienIcon = styled(RiLinkedinFill)`
  width: 1.5rem;
  height: 1.5rem;
`

const GithubIcon = styled(FaGithub)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

const OuterContainer = styled.div`
  max-width: ${smallDesktop};
  // border: 1px solid red;
  background: linear-gradient(
    140deg,
    rgba(237, 243, 244, 1) 31%,
    rgba(244, 239, 243, 1) 69%
  );
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 3rem;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 2rem;
  }
`
const IntroTextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  //  border: 1px solid red;
  padding: 1rem 2.5rem;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

const IntroPhotoContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
  // border: 1px solid black;
`
const IntroPhotoContainer1 = styled.div`
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
  // border: 1px solid black;
`

const MyImage = styled.img`
  object-fit: cover;
  width: 15rem;
  height: 15rem;
  // border: 7px solid rgb(99, 231, 128);
  border-radius: 0.25rem;
`

const IntoHighlightText = styled.p`
  font-size: ${font48};
  font-weight: ${fontWeight700};
  padding: 0;
  margin: 0;
`

const IntroText = styled.p`
  font-size: ${font16};
  font-weight: ${fontWeight500};
`

const LocationIcon = styled(ImLocation2)`
  width: 1.5rem;
  height: 2rem;
  margin-right: 0.5rem;
`

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block; /* Ensures it wraps the image */
  padding: 1rem 1.25rem; /* Adjust to move the border farther from the image */

  &::after,
  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(
      140deg,
      rgba(203, 206, 206, 1) 42%,
      rgba(224, 224, 224, 1) 69%
    );
  }

  /* Right Border */
  &::after {
    width: 15px; /* Thickness of the border */
    height: 80%; /* Length of the border (less than image height) */
    right: 0;
    bottom: 0;
  }

  /* Bottom Border */
  &::before {
    width: 80%; /* Length of the border (less than image width) */
    height: 15px; /* Thickness of the border */
    right: 0;
    bottom: 0;
  }
`
const style = {
  OuterContainer,
  IntroTextContainer,
  IntroPhotoContainer,
  MyImage,
  IntoHighlightText,
  IntroText,
  LocationIcon,
  LinkedienIcon,
  GithubIcon,
  HandWaving,
  ImageWrapper,
  IntroPhotoContainer1,
}

export default style
