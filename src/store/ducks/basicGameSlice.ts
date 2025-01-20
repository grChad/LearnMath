import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
	BasicGameState,
	BasicOperationType,
	BasicLevelType,
	BasicOperationDataType,
} from '../../types/store'
import { Sum } from '../../helpers/basicOperations'

const operationDataDefault: BasicOperationDataType = {
	operatorA: 9,
	operatorB: 8,
	result: 17,
	resultLength: 2,
	optionsAnswers: [2, 8, 15, 21, 17],
	listCharacters: ['9', '+', '8', '='],
}

const initialState: BasicGameState = {
	countProgress: 0,
	isCorrect: null,
	success: 0,
	generalDisabled: false,

	operationData: operationDataDefault,
	selectedAnswer: [],
}

export const basicGameSlice = createSlice({
	name: 'basic-game',
	initialState: initialState,
	reducers: {
		setCountProgress: (state, action: PayloadAction<'reset' | 'next'>) => {
			if (action.payload === 'reset') state.countProgress = 0
			if (action.payload === 'next') state.countProgress += 1
		},
		setIsCorrect: (state, action: PayloadAction<boolean | 'reset'>) => {
			if (action.payload === 'reset') state.isCorrect = null
			else state.isCorrect = action.payload
		},
		setSuccess: (state, action: PayloadAction<'correct' | 'reset'>) => {
			if (action.payload === 'correct') state.success += 1
			if (action.payload === 'reset') state.success = 0
		},
		setOperationData: (
			state,
			action: {
				payload: { operator: BasicOperationType; level: BasicLevelType } | 'reset'
			},
		) => {
			if (action.payload === 'reset') state.operationData = operationDataDefault
			else {
				const { operator, level } = action.payload
				state.operationData = getOperationData(operator, level)
			}
		},
		setSelectedAnswer: (state, action: PayloadAction<string[] | 'reset'>) => {
			if (action.payload === 'reset') state.selectedAnswer = []
			else state.selectedAnswer = action.payload
		},
		setGeneralDisabled: (state, action: PayloadAction<boolean>) => {
			state.generalDisabled = action.payload
		},
	},
})

export const {
	setCountProgress,
	setIsCorrect,
	setSuccess,
	setOperationData,
	setSelectedAnswer,
	setGeneralDisabled,
} = basicGameSlice.actions
export default basicGameSlice.reducer

/**
 * @param operator - Tipo de operación (Suma, Resta, Multiplicación, División)
 * @param level - Nivel de dificultad (Fácil, Normal, Difícil, Experto)
 * @return Datos de la operación
 */

function getOperationData(operator: BasicOperationType, level: BasicLevelType) {
	let result: BasicOperationDataType

	if (operator === 'Suma') {
		result = Sum(level)
	} else if (operator === 'Resta') {
		result = Sum(level)
	} else if (operator === 'Multiplicación') {
		result = Sum(level)
	} else if (operator === 'División') {
		result = Sum(level)
	} else {
		result = Sum(level)
	}

	return result
}
