import React from "react"
import { graphql } from "gatsby"
import Pager from "../components/pager"
function BlogPaginate({ data, pageContext }) {
  console.log(pageContext)
  const InfoBlog = data.allWpPost.edges
  return (
    <div>
      {InfoBlog.map((item, idx) => (
        <div key={idx}>
          <hr style={{ background: "red" }} />
          <h1>{item.node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: item.node.content }} />
          <hr style={{ background: "red" }} />
        </div>
      ))}
      <Pager pageContext={pageContext} />
    </div>
  )
}

export default BlogPaginate

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
