/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Topics from "../../components/Topics";
import { getBlogById } from "../../services/index";

export default function BlogPage({ match }) {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  const id = match.params.id;

  const getBlog = async () => {
    setLoading(true);
    const { data: blog } = (await getBlogById(id)) || {};
    const strippedBody = blog.body.value.replace(/(<([^>]+)>)/gi, "");
    blog.strippedBody = strippedBody;
    console.log(blog);
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
                w={"100vw"}
                h="500px"
                objectFit="cover"
              />
            )}
          </Box>
          <Box w={"50%"} m="auto">
            <Text mb={30} fontFamily={"logo_font"} fontSize={48}>
              {blog.title}
            </Text>
            {blog.body && (
              <Box textAlign="left" fontFamily="lato" fontWeight="500" mt={50}>
                <Text
                  float="left"
                  lineHeight="0.1"
                  fontSize={45}
                  dangerouslySetInnerHTML={{ __html: blog.strippedBody[0] }}
                ></Text>
                <Text
                  float="left"
                  lineHeight="0.6"
                  fontSize={28}
                  dangerouslySetInnerHTML={{
                    __html: blog.strippedBody
                      .slice(1)
                      .split(" ")
                      .slice(0, 5)
                      .join(" "),
                  }}
                ></Text>
                <br />
                <Text
                  fontSize={14}
                  color="gray.dark"
                  dangerouslySetInnerHTML={{
                    __html: blog.body.value.split(" ").slice(5).join(" "),
                  }}
                ></Text>
              </Box>
            )}
            {blog.fieldTopic && (
              <Box textAlign="right" float="right" mt="50px" maxWidth="250px">
                <Text>Topics</Text>
                <Topics topics={blog.fieldTopic} />
              </Box>
            )}
            {blog.uid && (
              <Box mt="50px" textAlign="left" float="left">
                <Text>Posted By {blog.uid.attributes.display_name}</Text>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
