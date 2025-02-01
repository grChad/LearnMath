import type { BasicLevelType, BasicOperationDataType as ReturnType } from '../types/store'
import { sortFisherYates } from './functions'

export const Sum = (lv: BasicLevelType): ReturnType => {
	const minimo = 1
	let maximo = 9

	if (lv === 'Fácil') maximo = 9
	if (lv === 'Normal') maximo = 99
	if (lv === 'Difícil') maximo = 999
	if (lv === 'Experto') maximo = 9999

	const number1 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
	const number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

	const operandA = Math.max(number1, number2)
	const operandB = Math.min(number1, number2)
	const correctAnswer = operandA + operandB
	const answerLength = correctAnswer.toString().length

	// NOTE: Ver si esto se puede extraer en una función
	// NOTE: Generamos 4 opciones que no sean iguales entre si ni iguales a la respuesta.
	const answer: number[] = []
	while (answer.length < 4) {
		let num = 0
		if (operandA < 6) {
			num = Math.floor(Math.random() * 9) + 1
		} else {
			num = Math.floor(Math.random() * (operandA - 1)) + (operandA + 1)
		}

		if (num !== correctAnswer && !answer.includes(num)) {
			answer.push(num)
		}
	}
	answer.push(correctAnswer) // agregar la respuesta correcta

	// Desordenamos las opciones, usando el algoritmo de Fisher-Yates
	const options = sortFisherYates(answer)
	const equation = `${operandA}+${operandB}`.split('')

	return { operandA, operandB, correctAnswer, answerLength, options, equation }
}

export const Subtraction = (lv: BasicLevelType): ReturnType => {
	const minimo = 0
	let maximo = 9

	if (lv === 'Fácil') maximo = 9
	if (lv === 'Normal') maximo = 99
	if (lv === 'Difícil') maximo = 999
	if (lv === 'Experto') maximo = 9999

	const number1 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
	let number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

	// Asegurarse de que number1 y number2 sean diferentes
	while (number1 === number2) {
		number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
	}

	const operandA = Math.max(number1, number2)
	const operandB = Math.min(number1, number2)
	const correctAnswer = operandA - operandB
	const answerLength = correctAnswer.toString().length

	// NOTE: Generamos 4 opciones que no sean iguales entre si ni iguales a la respuesta.
	const answer: number[] = []
	while (answer.length < 4) {
		let num = 0
		if (correctAnswer < 6) {
			num = Math.floor(Math.random() * (5 - 1 + 1)) + 1
		} else {
			if (correctAnswer > operandB) {
				if (correctAnswer - operandB >= 5) {
					// los rangos son [(denominator + 1), (result -1)], tomando ambos extremos
					num = Math.floor(Math.random() * (correctAnswer - operandB - 1)) + operandB + 1
				} else {
					num = Math.floor(Math.random() * (operandA - 1)) + 1
				}
			} else {
				num = Math.floor(Math.random() * (operandA - 1)) + 1
			}
		}

		if (num !== correctAnswer && !answer.includes(num)) {
			answer.push(num)
		}
	}
	answer.push(correctAnswer) // agregar la respuesta correcta

	// Desordenamos las opciones, usando el algoritmo de Fisher-Yates
	const options = sortFisherYates(answer)
	const equation = `${operandA}-${operandB}`.split('')

	return { operandA, operandB, correctAnswer, answerLength, options, equation }
}

// export const Multiplication = () => {}
//
// export const Division = () => {}
