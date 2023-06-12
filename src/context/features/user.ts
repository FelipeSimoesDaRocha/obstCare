// Next
import Router from 'next/router'

// Models
import { User } from 'models'

// Context
import type { RootState } from 'context'
import { StoreSlices } from 'context/types'

// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: User = {} as User

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<Partial<User>>) => {
      return { ...state, ...action.payload }
    },
    logout: () => {
      Router.push('/')
    }
  }
})

export const { saveUser, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
