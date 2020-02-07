import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { StyledLink, CardImage } from "../components/SharedStyledComponents"
import {
  colorGray,
  colorMedGray,
  screenSizeL,
  screenSizeM,
} from "../utils/styles"

const Card = styled(Link)`
  max-height: 600px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px ${colorMedGray};
  color: black;

  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${screenSizeM}) {
    flex-direction: column;
  }

  transition: 0.4s ease-out;

  &:hover {
    color: black;
    transform: translateY(-4px);
  }

  & > div {
    margin: 16px;
  }
`

const CardBody = styled.div`
  flex: 1 1 300px;
`

const CardHeader = styled.header`
  display: flex;
  margin: 24px 0;

  @media (max-width: ${screenSizeL}) {
    flex-direction: column;
  }
  @media (max-width: ${screenSizeM}) {
    text-align: center;
  }
`

const CardTitle = styled.div`
  font-size: 1.62671rem;
  font-weight: 500;
  margin-right: 16px;
  white-space: nowrap;

  @media (max-width: ${screenSizeL}) {
    margin-bottom: 16px;
  }
`

const CardGrant = styled.div`
  flex: 0 1 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardCategory = styled.div`
  color: ${colorGray};
  font-size: 0.9rem;
  white-space: nowrap;
`

const LighterText = styled.div`
  color: ${colorGray};
  font-size: 0.9rem;
`

const DetailsLink = styled(StyledLink)`
  font-weight: bold;
  @media (max-width: ${screenSizeM}) {
    text-align: center;
  }
`

const ProjectCard = ({ frontmatter, link }) => {
  return (
    <Card to={link}>
      <CardImage
        fluid={frontmatter.img.childImageSharp.fluid}
        alt="Ecosystem Support Program Process"
      />
      <CardBody>
        <CardHeader>
          <CardTitle>{frontmatter.title}</CardTitle>
          <CardCategory>{frontmatter.category}</CardCategory>
        </CardHeader>
        <div>{frontmatter.description}</div>
      </CardBody>
      <CardGrant>
        <div>
          <strong>Grant Received:</strong>
          <LighterText>
            {frontmatter.grantAmount} in {frontmatter.grantYear}
          </LighterText>
        </div>
        <DetailsLink to="/faq/">View Details</DetailsLink>
      </CardGrant>
    </Card>
  )
}

export default ProjectCard
