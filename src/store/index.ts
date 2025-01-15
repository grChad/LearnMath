import { configureStore } from '@reduxjs/toolkit'
import basicReducer from './ducks/basicSlice'
import basicGameReducer from './ducks/basicGameSlice'

export const store = configureStore({
	reducer: {
		basic: basicReducer,
		basicGame: basicGameReducer,
	},
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
