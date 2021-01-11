import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Fonts from "./Fonts";
import Footer from "./components/Footer";
import HomePage from "./pages/home/index";
import BlogPage from "./pages/blog";
import BlogListingPage from "./pages/blogs";
import BookmarksPage from "./pages/bookmarks";
import BlogsByTopicPage from "./pages/blogs-by-topic";
import AdminPage from "./pages/admin";
import ProtectedRoute from "./components/common/ProtectedRoute";
import CreateBlog from "./components/CreateBlog";

import { BookmarksContext } from "./context/index";
import { useLocalStorage } from "./hooks/useLocalStorage";

require("dotenv").config();

const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#232323",
    white: "#F5F5F5",
    solidWhite: "#FFFFFF",
    gray: {
      dark: "#777777",
      light: "#F5F5F5",
      200: "#e8e8e8",
    },
  },
  shadows: {
    sm: "0 2px 10px rgba(0,0,0,.15)",
  },
  fonts: {
    logo_font: "Libre Baskerville",
    body: "Martel Sans",
  },
});

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useLocalStorage(
    "bookmarks",
    []
  );

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <BookmarksContext.Provider
        value={{ bookmarkedBlogs, setBookmarkedBlogs }}
      >
        <Switch>
          <Route path="/bookmarks" component={BookmarksPage} />
          <Route path="/blogs/" component={BlogListingPage} />
          <Route path="/topic/:topic" component={BlogsByTopicPage} />
          <Route path="/blog/:id" component={BlogPage} />
          <ProtectedRoute path="/admin/add-blog" component={CreateBlog} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BookmarksContext.Provider>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
