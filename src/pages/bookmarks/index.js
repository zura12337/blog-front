import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import BlogTeaser from '../../components/BlogTeaser';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function BookmarksPage() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useLocalStorage(
    'bookmarks',
    []
  );

  useEffect(() => {
    console.log(bookmarkedBlogs);
  }, [bookmarkedBlogs]);

  return (
    <Box w={'60%'} m={'auto'} mt="80px">
      {bookmarkedBlogs &&
        bookmarkedBlogs.map(blog => (
          <BlogTeaser
            blog={blog}
            bookmarkedBlogs={bookmarkedBlogs}
            setBookmarkedBlogs={setBookmarkedBlogs}
          />
        ))}
    </Box>
  );
}
