import axios from 'axios';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const fetchWordByQuery = async query => {
  const response = await axios.get(query);
  return response.data;
};

export default fetchWordByQuery;
