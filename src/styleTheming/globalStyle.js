import { createGlobalStyle } from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

export const GlobalStyle = createGlobalStyle`

  body{
    background-color:${props => props.theme.color};
    color:${props => props.theme.c};
  }
`
