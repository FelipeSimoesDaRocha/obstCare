import fetcher from '../fetch';

export const getUserRequest = (userId: string) => {
  return fetcher(`/user/${userId}`);
};
