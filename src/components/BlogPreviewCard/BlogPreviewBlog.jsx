// src/components/BlogPreviewCard/BlogPreviewCard.jsx
import { navigate } from 'gatsby'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const BlogPreviewCard = ({
  title,
  slug,
  thumbnail,
  thumbnail_alt,
  author,
  minsToRead,
  datePublished,
}) => {
  const navigateToPost = () => navigate(slug)
  return (
    <StyledCard onClick={navigateToPost}>
      <GatsbyImage image={getImage(thumbnail)} />
      {/* Write some code here that uses the props and returns a card component */}
    </StyledCard>
  )
}