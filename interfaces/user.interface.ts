export interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  gender: string;
  image: string;
  token: string;
}

export interface UserLoginRequest {
  username: string;
  password: string;
}