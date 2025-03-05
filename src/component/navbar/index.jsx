import { useState } from 'react'
import styles from './style'
import { navData } from './metaData'
import logoImg from '../../assets/logo.jpg'
import ResumeUrl from '../../assets/Suprabhat_software_engineer_resume.pdf'

const {
  TopWebContainer,
  Container,
  MiddileContaienr,
  Logo,
  Pages,
  Cross,
  CustomDrawer,
  HamburgerIcon,
  MobileContainer,
  DownloadIcon,
  Button,
} = styles

export default function Navbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState('')

  const handleNavItemClick = (sectionId) => {
    setShowMobileNavbar(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = ResumeUrl
    link.download = 'Suprabhat-Singh-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <CustomDrawer
        destroyOnClose
        placement='left'
        closable={false}
        onClose={() => setShowMobileNavbar(false)}
        open={showMobileNavbar}
      >
        <Cross onClick={() => setShowMobileNavbar(false)} />
        {navData.map((navItem) => {
          return (
            <Pages
              key={navItem.id}
              onClick={() => handleNavItemClick(navItem.id)}
            >
              {navItem.name}
            </Pages>
          )
        })}
        <Button onClick={handleDownloadResume}>
          <DownloadIcon /> Download Resume
        </Button>
      </CustomDrawer>
      <TopWebContainer>
        <Container>
          <Logo
            onClick={() => {
              window.location.reload()
            }}
            src={logoImg}
            alt='logo'
          />
          <MiddileContaienr>
            {navData.map((navItem) => {
              return (
                <Pages
                  key={navItem.id}
                  onClick={() => handleNavItemClick(navItem.id)}
                >
                  {navItem.name}
                </Pages>
              )
            })}
          </MiddileContaienr>
          <Button onClick={handleDownloadResume}>
            <DownloadIcon /> Download Resume
          </Button>
        </Container>
      </TopWebContainer>
      <MobileContainer id='navContainer'>
        <Logo
          onClick={() => {
            window.location.reload()
          }}
          src={logoImg}
          loading='lazy'
          alt='Prepisely'
        />
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          {!showMobileNavbar && (
            <HamburgerIcon
              onClick={() => setShowMobileNavbar(true)}
              loading='lazy'
              alt='open-menu'
            />
          )}
        </div>
      </MobileContainer>
    </>
  )
}
