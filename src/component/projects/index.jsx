import React from 'react'
import style from './style'
import weatherImage from '../../assets/weather-app.png'
import jobsterImage from '../../assets/jbster.png'
import furnitureStoreImage from '../../assets/furniture-store.png'
import budgetImage from '../../assets/budget.png'

const {
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
} = style

export default function Projects() {
  return (
    <div id='projects'>
      <ProjectHeadingText>Projects</ProjectHeadingText>
      <OuterContainer>
        <Container>
          <FirstContainer>
            <Image src={weatherImage} />
          </FirstContainer>
          <SecondContainer>
            <HeadText>Weather App</HeadText>
            <ul>
              <li>
                Developed a feature-rich weather forecasting web application
                using React, integrating a weather API to fetch real-time data,
                ensuring users receive accurate current weather conditions along
                with a 7-day forecast for any selected city.
              </li>
              <li>
                Implemented an interactive search functionality that dynamically
                suggests city names as users type, enhancing usability and
                providing a seamless experience for quickly selecting and
                retrieving weather information for different locations.
              </li>
              <li>
                Optimized application performance by efficiently managing API
                requests, implementing caching mechanisms, and leveraging state
                management techniques to reduce redundant calls, improve
                responsiveness, and enhance the overall user experience.
              </li>
            </ul>
            <IconContainer>
              <a
                href='https://weather-app151151.netlify.app/'
                style={{ color: 'inherit' }}
              >
                <ArrowIcon />
              </a>
              <a
                href='https://github.com/suprabahtsingh1/weather-app'
                style={{ color: 'inherit' }}
              >
                <GitHubIcon />
              </a>

              <IconContainer />
            </IconContainer>
          </SecondContainer>
        </Container>
        <Container>
          <FirstContainerMobile>
            <Image src={jobsterImage} />
          </FirstContainerMobile>
          <SecondContainer>
            {' '}
            <HeadText>Job Tracking App</HeadText>
            <ul>
              <li>
                Developed a job tracking web application using React to help
                users efficiently manage and monitor their job applications by
                keeping track of their current status.
              </li>
              <li>
                Implemented a dynamic status tracking system that categorizes
                applications into 'Pending,' 'Accepted,' or 'Rejected,'
                providing users with a clear overview of their job search
                progress.
              </li>
              <li>
                Optimized the user experience by incorporating real-time
                updates, intuitive UI elements, and efficient state management,
                enabling seamless job application tracking and organization.
              </li>
            </ul>
            <IconContainer>
              <a
                href='https://job-tracker150.netlify.app/landing'
                style={{ color: 'inherit' }}
              >
                <ArrowIcon />
              </a>
              <a
                href='https://github.com/suprabahtsingh1/jobster'
                style={{ color: 'inherit' }}
              >
                <GitHubIcon />
              </a>

              <IconContainer />
            </IconContainer>
          </SecondContainer>
          <FirstContainerDextop>
            <Image src={jobsterImage} />
          </FirstContainerDextop>
        </Container>
        <Container>
          <FirstContainer>
            <Image src={furnitureStoreImage} />
          </FirstContainer>
          <SecondContainer>
            {' '}
            <HeadText>Furniture Store App</HeadText>
            <ul>
              <li>
                Developed a fully functional e-commerce web application using
                React, enabling users to browse and purchase furniture based on
                category, design, and price, with an intuitive and visually
                appealing UI.
              </li>
              <li>
                Implemented essential e-commerce features, including user
                authentication, cart management, and a secure payment gateway,
                ensuring a seamless and secure shopping experience.
              </li>
              <li>
                Enhanced user engagement by integrating an interactive and
                responsive design, optimizing performance, and ensuring smooth
                navigation for an efficient and enjoyable furniture shopping
                experience.
              </li>
            </ul>
            <IconContainer>
              <a
                href='https://furniture-store151.netlify.app/'
                style={{ color: 'inherit' }}
              >
                <ArrowIcon />
              </a>
              <a
                href='https://github.com/suprabahtsingh1/furniture-store'
                style={{ color: 'inherit' }}
              >
                <GitHubIcon />
              </a>
              <IconContainer />
            </IconContainer>
          </SecondContainer>
        </Container>
        <Container>
          <FirstContainerMobile>
            <Image src={budgetImage} />
          </FirstContainerMobile>
          <SecondContainer>
            {' '}
            <HeadText>Budget Tracker App</HeadText>
            <ul>
              <li>
                Developed a personal finance tracking web application using
                React, allowing users to efficiently monitor their budget, track
                savings, and manage expenses in a structured and organized way.
              </li>
              <li>
                Implemented key financial management features, including the
                ability to add, update, and delete expenses, providing users
                with real-time insights into their spending habits and savings
                progress.
              </li>
              <li>
                Designed an intuitive and user-friendly interface with
                interactive visualizations, enabling users to gain a clear
                understanding of their financial health and make informed
                budgeting decisions.
              </li>
            </ul>
            <IconContainer>
              <a
                href='https://sensational-beijinho-2a91e1.netlify.app/'
                style={{ color: 'inherit' }}
              >
                <ArrowIcon />
              </a>
              <a
                href='https://github.com/suprabahtsingh1/budget-tracker-app'
                style={{ color: 'inherit' }}
              >
                <GitHubIcon />
              </a>
              <IconContainer />
            </IconContainer>
          </SecondContainer>
          <FirstContainerDextop>
            <Image src={budgetImage} />
          </FirstContainerDextop>
        </Container>
      </OuterContainer>
    </div>
  )
}
