import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Link,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icon";

import React, { useEffect, useState } from "react";
import { getLatestBlogs, getUser, removeBlogById } from "../../services";
import Loading from "../../components/Loading";
import { RiDeleteBinFill } from "react-icons/ri";

export default function AdminContentManagementPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();

  const getBlogs = async () => {
    setLoading(true);
    const { data: blogs } = await getLatestBlogs(500);
    setBlogs(blogs);
    setLoading(false);
  };

  useEffect(() => {
    getBlogs();
    const token = getUser();
    setToken(token);
  }, []);

  const handleRemove = async (blogId) => {
    const response = await removeBlogById(blogId, token);
    console.log(response);
    if (response.status === 204) {
      getBlogs();
    }
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Box>
      {blogs && (
        <Table w="60%" m="auto" mt="70px">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date</Th>
              <Th>Posted By</Th>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map((blog, index) => (
              <Tr>
                <Td>{index + 1}.</Td>
                <Td>
                  <Link color="blue.600" href={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </Td>
                <Td>{blog.created}</Td>
                <Td>{blog.uid.attributes.display_name}</Td>
                <Td>
                  <Button
                    backgroundColor="red.500"
                    color="white"
                    fontFamily="heading"
                    _hover={{
                      backgroundColor: "red.600",
                    }}
                    onClick={() => handleRemove(blog.id)}
                  >
                    <RiDeleteBinFill size={20} />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
}
