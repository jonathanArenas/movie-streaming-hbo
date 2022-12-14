import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://localhost:3000"
  })
  
  return (
    <ApolloProvider client={client}>
       
    </ApolloProvider>
  )
}

export default App
