import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
	BasicGameState,
	BasicOperationType,
	BasicLevelType,
	BasicOperationDataType,
} from '../../types/store'
import { Sum, Subtraction, Multiplication, Division } from '../../helpers/basicOperations'

const operationDataDefault: BasicOperationDataType = {
	operandA: 9,
	operandB: 8,
	correctAnswer: 17,
	answerLength: 2,
	equation: ['9', '+', '8'],
}

const initialState: BasicGameState = {
	countProgress: 0,
	isCorrect: null,
	success: 0, // cantidad de veces que se ha acertado
	generalDisabled: false,

	operationData: operationDataDefault,
	selectedAnswer: [],
}

export const basicGameSlice = createSlice({
	name: 'basic-game',
	initialState: initialState,
	reducers: {
		setCountProgress: (state, action: PayloadAction<'reset' | 'next' | 'init'>) => {
			if (action.payload === 'reset') state.countProgress = 0
			if (action.payload === 'init') state.countProgress = 1
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
		setGeneralDisabled: (state, action: PayloadAction<'enabled' | 'disabled'>) => {
			if (action.payload === 'disabled') state.generalDisabled = true
			if (action.payload === 'enabled') state.generalDisabled = false
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
		result = Subtraction(level)
	} else if (operator === 'Multiplicación') {
		result = Multiplication(level)
	} else if (operator === 'División') {
		result = Division(level)
	} else {
		result = Sum(level)
	}

	return result
}
