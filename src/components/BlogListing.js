import { Box } from '@chakra-ui/react';
import React from 'react';
import BlogTeaser from './BlogTeaser';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function BlogListing({ blogs }) {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useLocalStorage(
    'bookmarks',
    []
  );

  return (
    <Box w={'100%'} mx={10}>
      {blogs.map(blog => (
        <BlogTeaser
          bookmarkedBlogs={bookmarkedBlogs}
          setBookmarkedBlogs={setBookmarkedBlogs}
          key={blog.id}
          blog={blog}
        />
      ))}
    </Box>
  );
}
