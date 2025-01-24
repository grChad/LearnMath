import { Pressable, StyleSheet, View } from 'react-native'

import type { TypeIconsAndSymbolsProps as IconsProps } from '../../../types/more'
import { useScheme } from '../../../hooks/useColor'

// Store
import { setSelectedAnswer } from '../../../store/ducks/basicGameSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/store'

// biome-ignore format:
import {
	IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix, IconSeven, IconEight,
	IconNine, IconZero,
} from '../../../components/icons/numbersAndSymbols'
import { IconDeleteLeft } from '../../../components/icons/Icons'

const WIDTH = 48
const GAP = 5

export default function Options() {
	const scheme = useScheme()
	const { selectedAnswer, operationData } = useAppSelector((state) => state.basicGame)
	const dispatch = useAppDispatch()

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
    { text: '0', tag: (props: IconsProps) => <IconZero {...props} />, type: 'symbol'},
	]

	const disabled = selectedAnswer.length >= operationData.resultLength
	const disabledDel = selectedAnswer.length === 0

	const addElementResult = (ele: string) => {
		dispatch(setSelectedAnswer([...selectedAnswer, ele]))
	}

	const delElementResult = () => {
		if (selectedAnswer.length > 0) {
			dispatch(setSelectedAnswer(selectedAnswer.slice(0, -1)))
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				{ListaIcons.map((ele) => (
					<Pressable
						key={ele?.text}
						disabled={disabled}
						onPress={() => addElementResult(ele.text)}
						style={({ pressed }) => [
							styles.buttonPressed,
							{
								opacity: pressed ? 0.5 : 1,
								backgroundColor: scheme.primary.concat('99'),
								borderColor: scheme.primary,
							},
						]}
					>
						{ele.tag({ size: 30, color: 'whitesmoke', stroke: 'black' })}
					</Pressable>
				))}
				<Pressable
					disabled={disabledDel}
					onPress={delElementResult}
					style={({ pressed }) => [
						styles.buttonPressed,
						{
							width: WIDTH * 2 + GAP,
							opacity: pressed ? 0.5 : 1,
							backgroundColor: scheme.primary.concat('99'),
							borderColor: scheme.primary,
						},
					]}
				>
					<IconDeleteLeft size={WIDTH} fill={scheme.notification} stroke="black" />
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	main: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5,
		maxWidth: 320,
		justifyContent: 'center',
	},
	buttonPressed: {
		width: 48,
		height: 48,
		borderRadius: 5,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
