import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import {
  font16,
  font20,
  font26,
  font32,
  fontWeight500,
  fontWeight600,
} from '../../common/design-token'
import { MdOutlineEmail, MdOutlineContentCopy } from 'react-icons/md'
import { FaMobileScreen } from 'react-icons/fa6'

const MobileIcon = styled(FaMobileScreen)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  @media screen and (max-width: 767px) {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`

const EmailIcon = styled(MdOutlineEmail)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  @media screen and (max-width: 767px) {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
`

const CopyIcon = styled(MdOutlineContentCopy)`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 1rem;
    height: 1rem;
  }
`

const LinkedienIcon = styled(RiLinkedinFill)`
  width: 1.5rem;
  height: 1.5rem;
  @media screen and (max-width: 767px) {
    width: 1rem;
    height: 1rem;
  }
`

const GithubIcon = styled(FaGithub)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (max-width: 767px) {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
`

const OuterContainer = styled.div`
  padding: 2rem 5rem;
  background: linear-gradient(
    140deg,
    rgba(237, 243, 244, 1) 31%,
    rgba(244, 239, 243, 1) 69%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 2rem;
  }
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
  @media screen and (max-width: 767px) {
    font-size: ${font26};
  }
`

const ContactText = styled.p`
  font-size: ${font20};
  font-weight: ${fontWeight500};
  color: #43474d;
  margin: 1rem;
  @media screen and (max-width: 767px) {
    font-size: ${font16};
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
`

const style = {
  LinkedienIcon,
  GithubIcon,
  OuterContainer,
  ProjectHeadingText,
  ContactText,
  Div,
  EmailIcon,
  CopyIcon,
  MobileIcon,
}

export default style
