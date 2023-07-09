// React-query
import { useMutation } from '@tanstack/react-query';

import { getUserRequest } from './requests';
export const useGetUser = () => useMutation(getUserRequest);
