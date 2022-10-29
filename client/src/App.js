import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
// import xxx from './pages/xxx';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  useEffect(() => {
    document.title = "Project Manager"
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/project" 
              element={<xxx />}
            />
            <Route 
              path="/project/:id" 
              element={<xxx />}
            />
            {/* <Route 
              path="*"
              element={<NotFound />}
            /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
