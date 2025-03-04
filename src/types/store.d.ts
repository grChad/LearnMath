export type BasicOperationType = 'Suma' | 'Resta' | 'Multiplicación' | 'División'
export type BasicLevelType = 'Fácil' | 'Normal' | 'Difícil' | 'Experto'
export type QuantilyType = 20 | 40 | 60 | 80

export interface BasicState {
	operation: BasicOperationType | null
	level: BasicLevelType | null
	quantily: QuantilyType | null
}

export type BasicOperationDataType = {
	operandA: number
	operandB: number
	correctAnswer: number
	answerLength: number
	equation: string[]
}

export interface BasicGameState {
	countProgress: number
	isCorrect: boolean | null
	success: number
	generalDisabled: boolean

	operationData: BasicOperationDataType
	selectedAnswer: string[]
}
