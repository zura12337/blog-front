/* eslint-disable no-unused-vars */
import React from "react";
import BlogListing from "../../components/BlogListing";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function BookmarksPage() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useLocalStorage(
    "bookmarks",
    []
  );

  return bookmarkedBlogs && <BlogListing blogs={bookmarkedBlogs} />;
}
