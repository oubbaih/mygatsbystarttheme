import React from "react"
import { graphql, useStaticQuery } from "gatsby"
function ShowCatPost({ data, CategoryPost }) {
  console.log("ShowCatPost" + CategoryPost)
  return (
    <div>
      {/* {allWpPost.nodes.map((catPost, idx) => (
        <div key={idx}>
          <h1>{catPost.title}</h1>
        </div>
      ))} */}
      test
    </div>
  )
}

export default ShowCatPost

export const query = graphql`
  query($CategoryPost: String!) {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: $CategoryPost } } } }
      }
    ) {
      nodes {
        title
      }
    }
  }
`
