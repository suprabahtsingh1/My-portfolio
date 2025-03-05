import React from 'react'
import style from './style'
import myImage from '../../assets/myProfilephoto.png'

const {
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
} = style

export default function Intro() {
  return (
    <OuterContainer id='about'>
      <IntroPhotoContainer1>
        <ImageWrapper>
          <MyImage src={myImage} alt='my photo' />
        </ImageWrapper>
      </IntroPhotoContainer1>
      <IntroTextContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <IntoHighlightText>Hi, I'm Suprabhat</IntoHighlightText>
          <HandWaving />
        </div>

        <IntroText>
          Front-End Developer with 2 + years of experience building responsive
          web applications using React.js. Contributed significantly to
          Prepisely.com, improving scalability and usability. Skilled in the
          React ecosystem, creating user-friendly interfaces, and delivering
          solutions for business needs. Strong team player with good
          communication skills.
        </IntroText>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <LocationIcon />
          <IntroText>Bengaluru, India</IntroText>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <a
            href='https://github.com/suprabahtsingh1'
            style={{ color: 'inherit' }}
          >
            <GithubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/suprabhat-singh-5a1448335'
            style={{ color: 'inherit' }}
          >
            {' '}
            <LinkedienIcon />
          </a>
        </div>
      </IntroTextContainer>
      <IntroPhotoContainer>
        <ImageWrapper>
          <MyImage src={myImage} alt='my photo' />
        </ImageWrapper>
      </IntroPhotoContainer>
    </OuterContainer>
  )
}
