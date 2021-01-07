import superagent from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';

superagentJsonapify(superagent);

const apiUrl = 'http://localhost/omedia-exercise/web';

export const getLatestBlogs = async (limit = 10) => {
  const response = await superagent.get(
    `${apiUrl}/api/node/blog?sort=-created&page[limit]=${limit}&include=field_image,field_topic`
  );
  const body = response.body;
  const data = body;
  return data;
};

export const getBlogById = async id => {
  const response = await superagent.get(
    `${apiUrl}/api/node/blog?filter[id]=${id}&include=field_image,field_topic`
  );
  const body = response.body;
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
