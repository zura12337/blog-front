import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BlogListing from '../../components/BlogListing';
import { getLatestBlogsOffset } from '../../services/index';
import queryString from 'query-string';

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [links, setLinks] = useState();
  const { page = 1 } = queryString.parse(window.location.search);
  const numericPage = parseInt(page);

  const getBlogs = async () => {
    const limitNumber = 10;
    const offsetLogic =
      page === undefined || numericPage === 1
        ? 0
        : (numericPage > 0 ? numericPage - 1 : 0) * limitNumber;
    console.log(offsetLogic);
    const { data: blogs, links } = await getLatestBlogsOffset({
      offset: offsetLogic,
      limit: limitNumber,
    });
    setBlogs(blogs);
    setLinks(links);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Box w={'60%'} m="auto" mt={'80px'}>
      <BlogListing blogs={blogs} />
      {links && (
        <Flex justifyContent="center" mt={50}>
          {links.prev && (
            <Link
              m={1}
              _hover={{ textDecoration: 'none' }}
              href={`/blogs/?page=${numericPage - 1}`}
            >
              <Button>Prev</Button>
            </Link>
          )}
          {links.next && (
            <Link
              m={1}
              _hover={{ textDecoration: 'none' }}
              href={`/blogs/?page=${numericPage + 1}`}
            >
              <Button>Next</Button>
            </Link>
          )}
        </Flex>
      )}
    </Box>
  );
}
