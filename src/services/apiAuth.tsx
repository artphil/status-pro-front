import axios from 'axios';
import { loginType, signUpType } from 'types/userTypes';

const BASE_URL = 'https://statuspro-api.onrender.com';
// const BASE_URL = 'http://localhost:5000';


function signIn(body: loginType) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

function signUp(body: signUpType) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

const apiAuth = { signIn, signUp };
export default apiAuth;