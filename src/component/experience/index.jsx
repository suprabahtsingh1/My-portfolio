import React from 'react'
import styles from './style'
import LogoImage from '../../assets/plogo.png'

const { OuterContainer, ExperienceText, Container, Logo, Text } = styles

export default function Experience() {
  return (
    <div>
      <OuterContainer id='experience'>
        <ExperienceText>Experience</ExperienceText>
        <div>
          <Container>
            <Logo src={LogoImage} />
            <div>
              <Text>Software Engineer</Text>
              <ul>
                <li>
                  <Text>
                    Contributed significantly to the development of the
                    company's frontend, ensuring a responsive and user-friendly
                    experience.
                  </Text>
                </li>
                <li>
                  <Text>
                    Played a key role in building and maintaining Prepisely.com,
                    managing its performance and usability.
                  </Text>
                </li>
                <li>
                  <Text>
                    Worked closely with cross-functional teams to develop and
                    improve core features.
                  </Text>
                </li>
                <li>
                  <Text>
                    Utilized React.js, Redux, React Query, Styled Components,
                    and Ant Design to build scalable applications.
                  </Text>
                </li>
                <li>
                  <Text>
                    Optimized and debugged frontend code for better performance
                    and efficiency.
                  </Text>
                </li>
              </ul>
            </div>
            <Text>April 2023 to December 2024</Text>
          </Container>
          <Container>
            <Logo src={LogoImage} />
            <div>
              <Text>Frontend Development Intern</Text>
              <ul>
                <li>
                  <Text>
                    Completed an intensive internship focused on web development
                    using React.js and modern frontend technologies.
                  </Text>
                </li>
                <li>
                  <Text>
                    Gained hands-on experience in building foundational
                    components for company projects.
                  </Text>
                </li>
                <li>
                  <Text>
                    Demonstrated strong skills and adaptability, leading to
                    increased responsibilities.
                  </Text>
                </li>
                <li>
                  <Text>
                    Quickly transitioned into a full-time role based on
                    exceptional performance.
                  </Text>
                </li>
              </ul>
            </div>
            <Text>October 2022 to April 2023</Text>
          </Container>
        </div>{' '}
      </OuterContainer>
    </div>
  )
}
