import { SiAntdesign } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { FaNodeJs } from 'react-icons/fa'
import { FaJira } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import styled from 'styled-components'
import {
  font16,
  font32,
  fontWeight500,
  fontWeight600,
} from '../../common/design-token'

const OuterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.5rem;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
`

const AntdDesignIcon = styled(SiAntdesign)`
  width: 5rem;
  height: 5rem;
`
const ReactIcon = styled(FaReact)`
  width: 5rem;
  height: 5rem;
  color: #10b9e3;
`
const TypeScriptIcon = styled(SiTypescript)`
  width: 5rem;
  height: 5rem;
  color: yellow;
  background-color: black;
`
const JavaScriptIcon = styled(SiJavascript)`
  width: 5rem;
  height: 5rem;
  color: yellow;
  background-color: black;
`
const HtmlIcon = styled(FaHtml5)`
  width: 5rem;
  height: 5rem;
  color: #cf5d1b;
`
const CssIcon = styled(IoLogoCss3)`
  width: 5rem;
  height: 5rem;
  color: #1b75cf;
`
const NodeJsicon = styled(FaNodeJs)`
  width: 5rem;
  height: 5rem;
  color: #0ac720;
`
const JiraIcon = styled(FaJira)`
  width: 5rem;
  height: 5rem;
  color: #3193f5;
`
const GitHubIcon = styled(FaGithub)`
  width: 5rem;
  height: 5rem;
`
const StyledCmponentIcon = styled(SiStyledcomponents)`
  width: 5rem;
  height: 5rem;
`

const MongoDbIcon = styled(SiMongodb)`
  width: 5rem;
  height: 5rem;
  color: #16a150;
`
const PostgreIcon = styled(BiLogoPostgresql)`
  width: 5rem;
  height: 5rem;
  color: #5b85c7;
`
const ExpressJsIcon = styled(SiExpress)`
  width: 5rem;
  height: 5rem;
`

const SkillsText = styled.div`
  font-size: ${font32};
  font-weight: ${fontWeight600};
  padding: 0.25rem 1rem;
  margin: 0;
  background-color: #e4eef0;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const IconText = styled.p`
  margin: 0.5rem 0;
  font-weight: ${fontWeight500};
  font-size: ${font16};
`

const style = {
  AntdDesignIcon,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  NodeJsicon,
  JiraIcon,
  GitHubIcon,
  StyledCmponentIcon,
  MongoDbIcon,
  PostgreIcon,
  ExpressJsIcon,
  Container,
  OuterContainer,
  SkillsText,
  IconContainer,
  IconText,
}

export default style
