export type BasicOperationType = 'Suma' | 'Resta' | 'Multiplicación' | 'División' | null
export type BasicLevelType = 'Fácil' | 'Normal' | 'Difícil' | 'Experto' | null
export type QuantilyType = 20 | 40 | 60 | 80 | null

export interface BasicState {
	operation: BasicOperationType
	level: BasicLevelType
	quantily: QuantilyType
}
