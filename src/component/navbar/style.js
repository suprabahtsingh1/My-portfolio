import { Drawer, Dropdown } from 'antd'
import { AiOutlineDown } from 'react-icons/ai'
import { RxCrossCircled } from 'react-icons/rx'
import { GrDownload } from 'react-icons/gr'
import { IoMenu } from 'react-icons/io5'
import {
  font18,
  fontWeight700,
  radius10,
  tabMaxWidth,
} from '../../common/design-token'
import styled from 'styled-components'

const TopWebContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 5px 1px #00000020;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  height: 4.75rem; //76px
  display: flex;

  @media only screen and (max-width: ${tabMaxWidth}) {
    display: none;
  }
`

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 0 2.5rem;
  @media only screen and (max-width: ${tabMaxWidth}) {
    padding: 0 0.5rem;
  }
  @media (max-width: ${tabMaxWidth}) {
    display: none;
  }
`

const MobileContainer = styled.div`
  display: none;
  box-shadow: 0 1px 5px 1px #00000020;

  img {
    cursor: pointer;
  }

  @media only screen and (max-width: ${tabMaxWidth}) {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    padding: 0.8rem 1.5rem;
    background: #ffffff;
    height: 4.75rem;
  }
`

const HamburgerIcon = styled(IoMenu)`
  height: 2rem;
  width: 1.5rem;
`

const MiddileContaienr = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  .selected-navlink {
    font-weight: ${fontWeight700} !important;
    color: #4d7f67 !important;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    margin: 2rem 0;
    clear: right;
  }
`

const Logo = styled.img`
  object-fit: cover;
  height: auto;
  cursor: pointer;
  width: 7rem;
  border-radius: 1rem;
  box-sizing: border-box;
`

const ThemeToggler = styled.img`
  cursor: pointer;
  height: 1.5rem;
  width: 3.75rem;
  transition: 0.8s;
  @media (min-width: 768px) and (max-width: 1320px) {
    width: 4rem;
  }
`

const Pages = styled.span`
  margin: 0 0.8rem;
  color: #080e0b;
  font-size: ${font18};
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: max-content;
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth transition */

  :hover {
    color: #80b29a;
    transform: scale(1.25); /* Increase size by 1.25x */
  }

  @media screen and (max-width: 1024px) {
    margin: 2rem 0;
  }
`

const ModeSelector = styled.div`
  display: flex;
  align-items: center;
  color: #080e0b;
  font-size: 1rem;
  white-space: nowrap;
  margin-bottom: 2rem;

  img {
    margin-left: 2rem;
    width: 2.75rem;
    height: 1.5rem;
  }
`

const Cross = styled(RxCrossCircled)`
  cursor: pointer;
  float: right;
  width: 1.5rem;
  height: 2rem;
`
const DownloadIcon = styled(GrDownload)`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
`

const BetaTag = styled.div`
  font-size: 0.725rem;
  position: absolute;
  top: -20px;
  padding: 0px 5px;
  border: 1px solid #3a5f4d;
  border-radius: 4px;
  color: #000000;
`

const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    background: #ffffff;
  }
  .ant-drawer-content-wrapper {
    width: max-content !important;
    min-width: 50%;
  }
`

const LoginSignupButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  .login {
    border-radius: ${radius10} 0 0 ${radius10};
    border: 2px solid #1caf6b;
    padding: 5px 10px;
    color: #1caf6b;
    font-weight: 600;
  }
  .signup {
    border-radius: 0 ${radius10} ${radius10} 0;
    border: 2px solid #1caf6b;
    background-color: #1caf6b;
    color: #ffffff;
    padding: 5px 10px;
    font-weight: 600;
  }
`

const AvatarWrapper = styled.div`
  margin: 0 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    p {
      margin-left: 0.25rem;
    }
  }
`

const AvtarDropDown = styled(Dropdown)``

const DownArrow = styled(AiOutlineDown).attrs((props) => ({
  color: '#29474A',
}))`
  margin-left: 0.1rem;
  @media screen and (max-width: 1080px) {
    margin-left: 0.5rem;
    margin-top: 0.25rem;
  }
`

const ProfileImage = styled.img`
  width: ${(props) => props.width || '3rem'};
  height: ${(props) => props.height || '3rem'};
  align-self: center;
  border-radius: 50%;
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgb(84, 231, 163);
  display: flex;
  border: none;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`

const styles = {
  TopWebContainer,
  Container,
  MobileContainer,
  MiddileContaienr,
  ButtonsContainer,
  Logo,
  ThemeToggler,
  Pages,
  ModeSelector,
  Cross,
  BetaTag,
  CustomDrawer,
  LoginSignupButton,
  AvatarWrapper,
  AvtarDropDown,
  DownArrow,
  ProfileImage,
  HamburgerIcon,
  DownloadIcon,
  Button,
}

export default styles
