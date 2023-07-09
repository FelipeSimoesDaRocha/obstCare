import { AsyncStorageKeys } from 'common/constants/asyncStorageKeys';

export const fetcher = async (path: string, options?: RequestInit): Promise<Response> => {
    const token = localStorage.getItem(AsyncStorageKeys.USER_DATA_LOGIN_GETBYID);

    const requestOptions: RequestInit = {
        ...options,
        headers: {
            ...(options?.headers || {}),
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, requestOptions);

    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${path}: ${response.statusText}`);
    }
    return response;
};

export default fetcher;
