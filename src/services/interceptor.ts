// Context
import { logout } from 'context/features/user'

// Api
import { api } from 'services/api'

// Redux
import { Store } from '@reduxjs/toolkit'

export const interceptor = (store: Store) => {
  api.interceptors.request.use(request => {
    const token = store.getState()?.user?.token
    if (token && request.headers) {
      request.headers['Authorization'] = `Bearer ${token}`
    }

    return Promise.resolve(request)
  })
  api.interceptors.response.use(response => {
    if (response.status === 401) {
      const { dispatch } = store
      dispatch(logout())
    }

    return Promise.resolve(response)
  })
}
