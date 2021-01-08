import superagent from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';
import { toast } from 'react-toastify';

superagentJsonapify(superagent);

const apiUrl = 'http://localhost/omedia-exercise/web';

export const getLatestBlogs = async (limit = 10) => {
  try {
    const response = await superagent.get(
      `${apiUrl}/api/node/blog?sort=-created&page[limit]=${limit}&include=field_image,field_topic`
    );
    const body = response.body;
    const data = body;
    return data;
  } catch (err) {
    toast.error(err.message);
  }
};

export const getLatestBlogsOffset = async ({ offset = '', limit = 10 }) => {
  try {
    const response = await superagent.get(
      `${apiUrl}/api/node/blog?sort=-created&page[limit]=${limit}&include=field_image,field_topic&page[offset]=${offset}`
    );
    const body = response.body;
    const data = body;
    return data;
  } catch (err) {
    toast.error(err.message);
  }
};

export const getBlogById = async id => {
  try {
    const response = await superagent.get(
      `${apiUrl}/api/node/blog/${id}?include=field_image,field_topic`
    );
    const body = response.body;
    const data = body;
    return data;
  } catch (err) {
    toast.error(err.status + ' ' + err.message);
  }
};

export const getBlogsByTopic = async topic => {
  const response = await superagent.get(
    `${apiUrl}/api/node/blog?filter[field_topic.name][value]=${topic}&include=field_image,field_topic`
  );
  const body = response.body;
  console.log(body);
  const data = body;
  return data;
};

export const getTopics = async () => {
  const response = await superagent.get(
    `${apiUrl}/api/taxonomy_term/topic?sort=weight`
  );
  const body = response.body;
  const data = body;
  return data;
};
