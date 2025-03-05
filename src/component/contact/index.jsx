import React from 'react'
import style from './style'

const {
  LinkedienIcon,
  GithubIcon,
  OuterContainer,
  ProjectHeadingText,
  ContactText,
  EmailIcon,
  Div,
  CopyIcon,
  MobileIcon,
} = style

export default function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied to clipboard!')
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <OuterContainer id='contact'>
      <ProjectHeadingText>Contacts</ProjectHeadingText>
      <div>
        <Div>
          <EmailIcon />
          <ContactText>singhsuprabhat007@gmail.com</ContactText>
          <CopyIcon
            onClick={() => copyToClipboard('singhsuprabhat007@gmail.com')}
          />
        </Div>

        <Div>
          <MobileIcon />
          <ContactText>6206086329</ContactText>
          <CopyIcon onClick={() => copyToClipboard('6206086329')} />
        </Div>
      </div>

      <Div>
        <a
          href='https://github.com/suprabahtsingh1'
          style={{ color: 'inherit' }}
        >
          <GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/suprabhat-singh-5a1448335/'
          style={{ color: 'inherit' }}
        >
          <LinkedienIcon />
        </a>
      </Div>
    </OuterContainer>
  )
}
