import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Widgets() {
  const { allCustomApi } = useStaticQuery(graphql`
    query {
      allCustomApi {
        edges {
          node {
            name
            widgets {
              name
              rendered
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {allCustomApi.edges.map((wi, ids) => (
        <>
          <h1 key={ids}>{wi.node.name}</h1>
          {wi.node.widgets.map((m, idd) => (
            <div key={idd}>
              <h2>{m.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: m.rendered }} />
            </div>
          ))}
        </>
      ))}
    </div>
  )
}
