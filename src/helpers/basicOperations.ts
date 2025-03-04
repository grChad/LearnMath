import type { BasicLevelType, BasicOperationDataType as ReturnType } from '../types/store'

export const Sum = (lv: BasicLevelType): ReturnType => {
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
	const correctAnswer = operandA + operandB
	const answerLength = correctAnswer.toString().length
	const equation = `${operandA}+${operandB}`.split('')

	return { operandA, operandB, correctAnswer, answerLength, equation }
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
	const equation = `${operandA}-${operandB}`.split('')

	return { operandA, operandB, correctAnswer, answerLength, equation }
}

export const Multiplication = (lv: BasicLevelType): ReturnType => {
	const minimo = 1
	let maximo = 9

	if (lv === 'Fácil') maximo = 9
	if (lv === 'Normal') maximo = 19
	if (lv === 'Difícil') maximo = 49
	if (lv === 'Experto') maximo = 99

	const number1 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
	const number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

	const operandA = Math.max(number1, number2)
	const operandB = Math.min(number1, number2)
	const correctAnswer = operandA * operandB
	const answerLength = correctAnswer.toString().length
	const equation = `${operandA}*${operandB}`.split('') // separar por caracter en lista

	return { operandA, operandB, correctAnswer, answerLength, equation }
}

export const Division = (lv: BasicLevelType): ReturnType => {
	const minimo = 1
	let maximo = 9

	if (lv === 'Fácil') maximo = 9
	if (lv === 'Normal') maximo = 19
	if (lv === 'Difícil') maximo = 49
	if (lv === 'Experto') maximo = 99

	const number1 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
	const number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

	const operandA = number1 * number2
	const operandB = Math.max(number1, number2)
	const correctAnswer = Math.min(number1, number2)
	const answerLength = correctAnswer.toString().length
	const equation = `${operandA}/${operandB}`.split('') // separar por caracter en lista

	return { operandA, operandB, correctAnswer, answerLength, equation }
}
