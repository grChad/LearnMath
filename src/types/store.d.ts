export type BasicOperationType = 'Suma' | 'Resta' | 'Multiplicación' | 'División' | null
export type BasicLevelType = 'Fácil' | 'Normal' | 'Difícil' | 'Experto' | null

export interface BasicState {
	operation: BasicOperationType
	level: BasicLevelType
}
