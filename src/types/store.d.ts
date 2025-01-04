export type BasicOperationType = 'Suma' | 'Resta' | 'Multiplicación' | 'División' | null

export interface BasicState {
	operation: BasicOperationType
}
