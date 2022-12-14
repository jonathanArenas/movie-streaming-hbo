import Navbar from './componets/Navbar'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AuthProvider } from './context/Auth';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://localhost:3000"
  })

  return (
    <ApolloProvider client={client}>
     <AuthProvider>
        <Navbar></Navbar>
     </AuthProvider>
    </ApolloProvider>
  )
}

export default App
