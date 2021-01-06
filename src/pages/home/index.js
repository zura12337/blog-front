import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider';
import { getLatestBlogs } from '../../services';

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const { data: blogs } = await getLatestBlogs(10);
    setBlogs(blogs);
    console.log(blogs);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <Slider latestBlogs={blogs} />
    </>
  );
}
