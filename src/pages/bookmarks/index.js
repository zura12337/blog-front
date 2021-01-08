import { Box } from '@chakra-ui/react';
import React from 'react';
import BlogTeaser from '../../components/BlogTeaser';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function BookmarksPage() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useLocalStorage(
    'bookmarks',
    []
  );

  return (
    <Box w={'60%'} m={'auto'} mt="80px">
      {bookmarkedBlogs &&
        bookmarkedBlogs.map(blog => <BlogTeaser blog={blog} />)}
    </Box>
  );
}
