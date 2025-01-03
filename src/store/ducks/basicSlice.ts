import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { BasicOperationType, BasicState } from '../../types/store'

const initialState: BasicState = {
	operation: null,
}

export const basicSlice = createSlice({
	name: 'basic',
	initialState: initialState,
	reducers: {
		setOperation: (state, action: PayloadAction<BasicOperationType>) => {
			state.operation = action.payload
		},
	},
})

export const { setOperation } = basicSlice.actions
export default basicSlice.reducer
