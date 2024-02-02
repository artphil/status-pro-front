import axios from 'axios';

const BASE_URL = 'http://api.render.com/deploy/srv-cmu2bbq1hbls73d5ljbg?key=XEAOzaMdDfA';
//const BASE_URL = 'http://localhost:5000';

export type User = {
    name: string,
    nickname: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type SignInParams = Pick<User, 'email' | 'password'>;

function signIn(body: SignInParams) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

function signUp(body: User) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

const apiAuth = { signIn, signUp };
export default apiAuth;