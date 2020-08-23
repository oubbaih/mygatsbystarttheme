import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import GlobalStoreProvider from "./src/GlobalStore/"
export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    uri: `${process.env.WORDPRESS_SITE_URL}graphql`,
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <GlobalStoreProvider>{element}</GlobalStoreProvider>
    </ApolloProvider>
  )
}
