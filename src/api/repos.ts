import axios from 'axios';

export const fetchRepos = async (orgLogin: string) => {
  const result = await axios.get(
    `https://api.github.com/orgs/${orgLogin}/repos`
  );

  return result.data;
};
