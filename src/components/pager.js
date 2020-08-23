import React from "react"
import { Link } from "gatsby"
function Pager({ pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div style={{ display: "flex", flexDrection: "space-between" }}>
      {previousPagePath && (
        <Link style={{ flexBasis: "100%" }} to={previousPagePath}>
          Previous
        </Link>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next</Link>}
    </div>
  )
}

export default Pager
