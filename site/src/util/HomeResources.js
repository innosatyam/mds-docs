import { useStaticQuery, graphql } from 'gatsby';

export default function useHomeResources() {
  const {
    allHomeResourcesYaml: { edges },
  } = useStaticQuery(graphql`
    query HOME_RESOURCES {
      allHomeResourcesYaml {
        edges {
          node {
            description
            link
            name
            imgSrc {
              publicURL
            }
          }
        }
      }
    }
  `);

  const items = edges.map(({ node }) => node);
  return items;
}
