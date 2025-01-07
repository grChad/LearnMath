import { createSlice } from '@reduxjs/toolkit'
import type { BasicState } from '../../types/store'

const initialState: BasicState = {
	operation: null,
	level: null,
	quantily: null,
}

export const basicSlice = createSlice({
	name: 'basic',
	initialState: initialState,
	reducers: {
		setOperation: (state, action) => {
			state.operation = action.payload
		},
		setLevelBasic: (state, action) => {
			state.level = action.payload
		},
		setQuantily: (state, action) => {
			state.quantily = action.payload
		},
	},
})

export const { setOperation, setLevelBasic, setQuantily } = basicSlice.actions
export default basicSlice.reducer
