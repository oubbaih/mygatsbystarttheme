import React from "react"
import { gql, useQuery } from "@apollo/client"

const GET_POST_VIEWS = gql`
  query MyQuery($postId: ID!) {
    post(id: $postId) {
      postViews
      disLikeCount
      likeCount
    }
  }
`
function Views({ postId }) {
  const { loading, error, data } = useQuery(GET_POST_VIEWS, {
    variables: { postId },
    pollInterval: 500,
  })
  if (loading) return <p>loading</p>
  if (error) return <p>error</p>
  console.log(postId)
  return (
    <div>
      <h1>post views {data.post.postViews}</h1>
      <h1>post dislikes {data.post.disLikeCount}</h1>
      <h1>post likes{data.post.likeCount}</h1>
    </div>
  )
}

export default Views
