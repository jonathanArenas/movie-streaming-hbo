import Navbar from './componets/Navbar'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://localhost:3000"
  })

  return (
    <ApolloProvider client={client}>
      <Navbar></Navbar>
    </ApolloProvider>
  )
}

export default App
