import { View, Text, Button } from 'react-native'
import { setOperation } from '../../../store/ducks/basicSlice'
import { useAppSelector, useAppDispatch } from '../../../hooks/store'

export default function BasicTabScreen() {
	const operation = useAppSelector((state) => state.basic.operation)
	const dispatch = useAppDispatch()

	console.log(operation)

	return (
		<View>
			<Text>Basic Tab Screen</Text>
			<Button title="Change Operation" onPress={() => dispatch(setOperation(null))} />
		</View>
	)
}
