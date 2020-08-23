import React, { useEffect } from "react"

import Layout from "../components/layout"

import { useQuery, gql } from "@apollo/client"
import TopPosts from "../components/TopPosts"
import CategoriesFiter from "../components/CategoriesFiter"
import Widgets from "../components/widgets"
import styled from "styled-components"

const TestCom = styled.p`
  font-size: 20rem;
  @media ${props => props.theme.device.mobileS} {
    font-size: 2rem;
  }
`
const EXCHANGE_RATES = gql`
  query MyQuery {
    pages {
      edges {
        node {
          title
        }
      }
    }
  }
`
const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>error((</p>

  return data.pages.edges.map((it, idx) => (
    <div key={idx}>
      <h1>{it.node.title}</h1>
    </div>
  ))
}

const IndexPage = () => (
  <Layout>
    <ExchangeRates />
    <hr style={{ backround: "red", height: "2rem" }} />
    <TopPosts />
    <CategoriesFiter />
    <Widgets />
    <TestCom> this is the test component</TestCom>
  </Layout>
)

export default IndexPage
