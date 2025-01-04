import { StyleSheet, Text, Pressable, View } from 'react-native'

// Store
import { setOperation } from '../../../store/ducks/basicSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/store'

import { useScheme } from '../../../hooks/useColor'
import type { BasicOperationType } from '../../../types/store'
import { BasicOperationOptions as Operation } from '../../../constants/basicData'

// components
import CardCommon from '../../../components/CardCommon'
import { SvgPlus, SvgMinus, SvgMultiplication, SvgDivision } from './SvgAnimated'

export default function SelectOperation() {
	const scheme = useScheme()

	const theOperation = useAppSelector((state) => state.basic.operation)
	const dispatch = useAppDispatch()

	const handlePress = (op: BasicOperationType) => {
		dispatch(setOperation(op))
	}

	return (
		<CardCommon title="¿Que operacion haras?" useTag={true} tagName={theOperation}>
			<View style={[styles.boxMain]}>
				<Pressable onPressIn={() => handlePress(Operation.Addition)}>
					<SvgPlus operation={theOperation} selectStroke={scheme.text} />
				</Pressable>

				<Pressable onPressIn={() => handlePress(Operation.Subtraction)}>
					<SvgMinus operation={theOperation} selectStroke={scheme.text} />
				</Pressable>

				<Pressable onPressIn={() => handlePress(Operation.Multiplication)}>
					<SvgMultiplication operation={theOperation} selectStroke={scheme.text} />
				</Pressable>

				<Pressable onPressIn={() => handlePress(Operation.Division)}>
					<SvgDivision operation={theOperation} selectStroke={scheme.text} />
				</Pressable>
			</View>
		</CardCommon>
	)
}

const styles = StyleSheet.create({
	boxMain: {
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		height: 85,
	},
})
