import React from "react"
import StyleTheming from "../styleTheming"
import { useStateContextValues, useDispatchFunctions } from "../GlobalStore"
function Layout({ children }) {
  const { test } = useStateContextValues()
  const dispatch = useDispatchFunctions()
  return (
    <StyleTheming>
      <main>{children}</main>
      {test ? "yesy" : "nono"}
      <button onClick={() => dispatch({ type: "CHANGE_TEST" })}>change</button>
    </StyleTheming>
  )
}
export default Layout
