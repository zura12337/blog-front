import { Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { getBlogById } from '../../services/index';

export default function BlogPage({ match }) {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  const id = match.params.id;

  const getBlog = async () => {
    setLoading(true);
    const { data: blog } = (await getBlogById(id)) || {};
    if (blog) {
      blog.body.value =
        blog && blog.body && blog.body.value.replace(/<\/?[^>]+(>|$)/g, '');
    }
    setBlog(blog);
    setLoading(false);
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <>
      {blog && (
        <Box textAlign="center">
          <Box mb={50}>
            {blog.fieldImage && (
              <Image
                src={`http://localhost${blog.fieldImage.uri.url}`}
                w={'100vw'}
                h="500px"
                objectFit="cover"
              />
            )}
          </Box>
          <Box w={'60%'} m="auto">
            <Text mb={30} fontSize={48}>
              {blog.title}
            </Text>
            {blog.body && (
              <Box textAlign="left" mt={50}>
                <Text float="left" lineHeight="0.1" fontSize={45}>
                  {blog.body.value[0]}
                </Text>
                <Text float="left" lineHeight="0.6" fontSize={28}>
                  {blog.body.value.slice(1).split(' ').slice(0, 5).join(' ')}
                </Text>
                <br />
                <Text fontSize={14} color="gray.dark">
                  {blog.body.value.split(' ').slice(5).join(' ')}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
