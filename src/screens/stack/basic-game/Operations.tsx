import { StyleSheet, View } from 'react-native'

import type { TypeIconsAndSymbolsProps as IconsProps } from '../../../types/more'
import { useScheme } from '../../../hooks/useColor'

// Store
import { useAppSelector } from '../../../hooks/store'

// biome-ignore format:
import {
  IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix, IconSeven, IconNine, IconZero,
  IconAddition, IconSubstraction, IconMultiplication, IconDivision, IconEqual, IconEight
} from '../../../components/icons/numbersAndSymbols'

export default function Operations() {
	const scheme = useScheme()
	const { operationData, selectedAnswer } = useAppSelector((state) => state.basicGame) // Store
	const { level } = useAppSelector((state) => state.basic)

	const COLOR_NUMBER = '#CA9EE6'
	const sizes =
		level === 'Experto'
			? { height: 58, width: (58 * 2) / 3 }
			: { height: 70, width: (70 * 2) / 3 }

	// biome-ignore format:
	const ListaIcons = [
		{ text: '1', tag: (props: IconsProps) => <IconOne {...props} />, type: 'number' },
		{ text: '2', tag: (props: IconsProps) => <IconTwo {...props} />, type: 'number' },
		{ text: '3', tag: (props: IconsProps) => <IconThree {...props} />, type: 'number' },
		{ text: '4', tag: (props: IconsProps) => <IconFour {...props} />, type: 'number' },
		{ text: '5', tag: (props: IconsProps) => <IconFive {...props} />, type: 'number' },
		{ text: '6', tag: (props: IconsProps) => <IconSix {...props} />, type: 'number' },
		{ text: '7', tag: (props: IconsProps) => <IconSeven {...props} />, type: 'number' },
		{ text: '8', tag: (props: IconsProps) => <IconEight {...props} />, type: 'number' },
		{ text: '9', tag: (props: IconsProps) => <IconNine {...props} />, type: 'number' },
    { text: '0', tag: (props: IconsProps) => <IconZero {...props} />, type: 'number'},
		{ text: '+', tag: (props: IconsProps) => <IconAddition {...props} />, type: 'symbol' },
		{ text: '-', tag: (props: IconsProps) => <IconSubstraction {...props} />, type: 'symbol' },
		{ text: '*', tag: (props: IconsProps) => <IconMultiplication {...props} />, type: 'symbol' },
		{ text: '/', tag: (props: IconsProps) => <IconDivision {...props} />, type: 'symbol' },
		{ text: '=', tag: (props: IconsProps) => <IconEqual {...props} />, type: 'symbol' },
	]

	// Filtrar y ordenar de acuerdo al orden en listCharacters
	const listaOperations = operationData.equation
		.map((op) => ListaIcons.find((item) => item.text === op))
		.filter((item) => item !== undefined)

	const listResults = selectedAnswer
		.map((op) => ListaIcons.find((item) => item.text === op))
		.filter((item) => item !== undefined)

	return (
		<View style={styles.container}>
			<View style={styles.mainOperators}>
				<View style={styles.opLeftTop}>
					{listaOperations.map((ele, index) => (
						<View key={index.toString()}>
							{ele?.tag({
								size: sizes.height,
								color: ele.type === 'number' ? COLOR_NUMBER : scheme.notification,
								stroke: scheme.text,
							})}
						</View>
					))}
				</View>
				<View style={styles.opRightBottom}>
					<IconEqual
						size={sizes.height}
						color={scheme.notification}
						stroke={scheme.text}
					/>
					<View
						style={[
							styles.boxResult,
							{
								minWidth: sizes.width * operationData.answerLength + 10,
								backgroundColor: scheme.card,
								borderColor: scheme.primarySelected,
								height: sizes.height + 10,
							},
						]}
					>
						{listResults.map((ele, index) => (
							<View key={index.toString()}>
								{ele?.tag({
									size: sizes.height,
									color: COLOR_NUMBER,
									stroke: scheme.text,
								})}
							</View>
						))}
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	mainOperators: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
		padding: 10,
	},
	opLeftTop: { flexDirection: 'row', alignItems: 'center' },
	opRightBottom: { flexDirection: 'row', alignItems: 'center' },
	boxResult: {
		flexDirection: 'row',
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
