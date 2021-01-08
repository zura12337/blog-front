import { Box } from '@chakra-ui/react';
import React from 'react';
import BlogListing from '../../components/BlogListing';
import BlogTeaser from '../../components/BlogTeaser';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function BookmarksPage() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useLocalStorage(
    'bookmarks',
    []
  );

  return bookmarkedBlogs && <BlogListing blogs={bookmarkedBlogs} />;
}
