import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { BasicOperationType, BasicState } from '../../types/store'

const initialState: BasicState = {
	operation: null,
	level: null,
}

export const basicSlice = createSlice({
	name: 'basic',
	initialState: initialState,
	reducers: {
		setOperation: (state, action: PayloadAction<BasicOperationType>) => {
			state.operation = action.payload
		},
		setLevelBasic: (state, action) => {
			state.level = action.payload
		},
	},
})

export const { setOperation, setLevelBasic } = basicSlice.actions
export default basicSlice.reducer
