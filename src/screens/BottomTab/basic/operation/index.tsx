import { StyleSheet, Pressable, View } from 'react-native'

// Store
import { setOperation } from '../../../../store/ducks/basicSlice'
import { useAppSelector, useAppDispatch } from '../../../../hooks/store'

import { useScheme } from '../../../../hooks/useColor'
import { BasicOperationOptions as Operation } from '../../../../constants/basicData'

// components
import CardCommon from '../../../../components/CardCommon'
import { SvgPlus, SvgMinus, SvgMultiplication, SvgDivision } from './SvgAnimated'

interface Props {
	soundPress: () => void
}
export default ({ soundPress }: Props) => {
	const scheme = useScheme()

	const theOperation = useAppSelector((state) => state.basic.operation)
	const dispatch = useAppDispatch()

	const handlePress = (op: string) => {
		soundPress()
		dispatch(setOperation(op))
	}

	const sharedProps = { operation: theOperation, selectStroke: scheme.text }

	return (
		<CardCommon title="¿Que operacion haras?" useTag={true} tagName={theOperation}>
			<View style={[styles.boxMain]}>
				{Operation.map(({ operation, color }) => (
					<Pressable key={operation} onPressIn={() => handlePress(operation)}>
						{operation === Operation[0].operation && (
							<SvgPlus {...sharedProps} color={color} />
						)}
						{operation === Operation[1].operation && (
							<SvgMinus {...sharedProps} color={color} />
						)}
						{operation === Operation[2].operation && (
							<SvgMultiplication {...sharedProps} color={color} />
						)}
						{operation === Operation[3].operation && (
							<SvgDivision {...sharedProps} color={color} />
						)}
					</Pressable>
				))}
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
