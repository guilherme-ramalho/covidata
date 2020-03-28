import axios from 'axios';

const request = ({ method, endpoint }) =>
  axios({
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-parse-application-id': 'unAFkcaNDeXajurGB7LChj8SgQYS2ptm',
    },
    baseURL: `https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/${endpoint}`,
  });

export default request;
