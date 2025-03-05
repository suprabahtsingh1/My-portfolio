import React from 'react'
import style from './style'

const {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NodeJsicon,
  HtmlIcon,
  GitHubIcon,
  CssIcon,
  JiraIcon,
  StyledCmponentIcon,
  MongoDbIcon,
  ExpressJsIcon,
  AntdDesignIcon,
  PostgreIcon,
  Container,
  OuterContainer,
  SkillsText,
  IconContainer,
  IconText,
} = style

export default function Skills() {
  return (
    <OuterContainer id='skills'>
      <SkillsText>Skills</SkillsText>
      <div>
        <Container>
          <IconContainer>
            <JavaScriptIcon />
            <IconText>JavaScript</IconText>
          </IconContainer>
          <IconContainer>
            <TypeScriptIcon />
            <IconText>TypeScript</IconText>
          </IconContainer>
          <IconContainer>
            <ReactIcon />
            <IconText>React</IconText>
          </IconContainer>
          <IconContainer>
            <NodeJsicon />
            <IconText>Node.js</IconText>
          </IconContainer>
          <IconContainer>
            <HtmlIcon />
            <IconText>HTML5</IconText>
          </IconContainer>
          <IconContainer>
            <GitHubIcon />
            <IconText>Git</IconText>
          </IconContainer>
          <IconContainer>
            <CssIcon />
            <IconText>Css</IconText>
          </IconContainer>
          <IconContainer>
            <JiraIcon />
            <IconText>Agile</IconText>
          </IconContainer>
          <IconContainer>
            <StyledCmponentIcon />
            <IconText>Styled-components</IconText>
          </IconContainer>
          <IconContainer>
            <MongoDbIcon />
            <IconText>MongoDB</IconText>
          </IconContainer>
          <IconContainer>
            <ExpressJsIcon />
            <IconText>Express.js</IconText>
          </IconContainer>
          <IconContainer>
            <AntdDesignIcon />
            <IconText>Ant Design</IconText>
          </IconContainer>
          <IconContainer>
            <PostgreIcon />
            <IconText>Postgresql</IconText>
          </IconContainer>
        </Container>
      </div>
    </OuterContainer>
  )
}
