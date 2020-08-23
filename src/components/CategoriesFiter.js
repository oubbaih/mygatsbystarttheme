import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Nav, NavItem, NavLink } from "reactstrap"
import ShowCatPost from "./ShowCatPost"

function CategoriesFiter() {
  const [Category, setCategory] = useState("")
  useEffect(() => {
    setCategory(allWpCategory.edges[0].node.name)
  }, [])
  const { allWpCategory } = useStaticQuery(graphql`
    query MyQuery {
      allWpCategory {
        edges {
          node {
            name
            slug
            posts {
              nodes {
                title
              }
            }
          }
        }
      }
    }
  `)

  const handleChange = e => {
    setCategory(e.target.textContent)
  }
  console.log(Category)
  return (
    <>
      <Nav>
        {allWpCategory.edges.map((cat, idx) => (
          <NavItem key={idx}>
            <NavLink href="#" onClick={handleChange}>
              {cat.node.name}
            </NavLink>
            <ShowCatPost CategoryPost={Category} />
          </NavItem>
        ))}
      </Nav>
      {allWpCategory.edges.map(
        (pos, idx) =>
          Category === pos.node.name && (
            <div key={idx}>
              {pos.node.posts.nodes.map((it, id) => (
                <div key={id}>
                  <h1>{it.title}</h1>
                </div>
              ))}
            </div>
          )
      )}
    </>
  )
}

export default CategoriesFiter
