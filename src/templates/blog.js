import React, { useEffect } from "react"
import contentParser from "gatsby-wpgraphql-inline-images"
import { graphql } from "gatsby"
import Views from "../components/views"
// import AddViews from "../components/addViews"
import { gql, useMutation } from "@apollo/client"
const ADD_POST_VIEW = gql`
  mutation AddViewToPost($clientMutationId: String!, $id: ID!) {
    postViews(input: { clientMutationId: $clientMutationId, id: $id }) {
      clientMutationId
    }
  }
`
const ADD_POST_LIKES = gql`
  mutation AddLikePosts($clientMutationId: String!, $id: ID!) {
    likePost(input: { clientMutationId: $clientMutationId, id: $id }) {
      clientMutationId
    }
  }
`
const ADD_POST_DISLIKES = gql`
  mutation AddDisLikesPost($clientMutationId: String!, $id: ID!) {
    disLikeCount(input: { clientMutationId: $clientMutationId, id: $id }) {
      clientMutationId
    }
  }
`
function Blog({ data, pageContext }) {
  const [postViews] = useMutation(ADD_POST_VIEW)
  const [likePost] = useMutation(ADD_POST_LIKES)
  const [disLikeCount] = useMutation(ADD_POST_DISLIKES)
  const { id } = pageContext
  const { title } = pageContext
  const PostViewsMutation = () => {
    const { id } = pageContext
    const { title } = pageContext
    postViews({ variables: { clientMutationId: title, id } })
  }
  useEffect(() => {
    PostViewsMutation()
  }, [])
  const LikesHandler = () => {
    likePost({ variables: { clientMutationId: title, id } })
  }
  const DisLikesHandler = () => {
    disLikeCount({ variables: { clientMutationId: title, id } })
  }
  const idx = pageContext.id
  const content = data.wpPost.content
  const { pluginOptions } = pageContext

  return (
    <div>
      <h1>{data.wpPost.title}</h1>
      <div>{contentParser({ content }, pluginOptions)}</div>
      <Views postId={idx} />
      <button onClick={LikesHandler}>like</button>
      <button onClick={DisLikesHandler}>dislike</button>
    </div>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`
