import { BasicOperationOptions } from '../constants/basicData'

export type BasicOperationType = 'Suma' | 'Resta' | 'Multiplicación' | 'División' | null

export interface BasicState {
	operation: BasicOperationType
}
