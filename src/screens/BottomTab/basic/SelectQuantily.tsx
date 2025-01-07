import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useScheme } from '../../../hooks/useColor'
import { QuantilyOptions as QOpts } from '../../../constants/basicData'

// Store
import { setQuantily } from '../../../store/ducks/basicSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/store'

// components
import CardCommon from '../../../components/CardCommon'
import { IconRoundedSquare } from '../../../components/Icons'

interface Props {
	soundPress: () => void
}
export default function SelectQuantily({ soundPress }: Props) {
	const scheme = useScheme()
	const quantily = useAppSelector((state) => state.basic.quantily)
	const dispatch = useAppDispatch()

	const changeQuantily = (opt: number) => {
		soundPress()
		dispatch(setQuantily(opt))
	}

	const setColor = (num: number) => {
		return num === quantily ? scheme.primary : scheme.secondText
	}

	// change enums to number[]
	const listQuantily = Object.values(QOpts).filter(
		(ele) => typeof ele === 'number',
	) as number[]

	return (
		<CardCommon title="¿Cuantos harás?">
			<View style={{ flexDirection: 'row', gap: 10 }}>
				{listQuantily.map((num) => (
					<Pressable
						key={num.toString()}
						onPress={() => changeQuantily(num)}
						style={{ position: 'relative' }}
					>
						<IconRoundedSquare size={60} hasStroke stroke={setColor(num)} />
						<Text style={[styles.text, { color: setColor(num) }]}>{num}</Text>
					</Pressable>
				))}
			</View>
		</CardCommon>
	)
}

const styles = StyleSheet.create({
	text: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		textAlign: 'center',
		textAlignVertical: 'center',
		fontFamily: 'Asap',
		fontSize: 25,
		textShadowColor: 'black',
		textShadowRadius: 1,
	},
})
