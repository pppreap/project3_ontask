import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Project from './pages/Project';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  useEffect(() => {
    document.title = "OnTask";
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            {/* <div className="pages"> */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Project />} />
            {/* <Route 
              path="*"
              element={<NotFound />}
            /> */}
            {/* </div> */}
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;