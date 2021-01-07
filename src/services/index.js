import superagent from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';

superagentJsonapify(superagent);

export const getLatestBlogs = async (limit = '') => {
  const response = await superagent.get(
    `http://localhost/omedia-exercise/web/api/node/blog?sort=-created&page[limit]=${limit}&include=field_image,field_topic`
  );
  const body = response.body;
  const data = body;
  return data;
};

export const getTopics = async () => {
  const response = await superagent.get(
    'http://localhost/omedia-exercise/web/api/taxonomy_term/topic?sort=weight'
  );
  const body = response.body;
  const data = body;
  return data;
};
