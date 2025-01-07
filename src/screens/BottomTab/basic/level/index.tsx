import { View, Pressable } from 'react-native'

// Store
import { setLevelBasic } from '../../../../store/ducks/basicSlice'
import { useAppDispatch } from '../../../../hooks/store'

import { BasicLevelOptions as Level } from '../../../../constants/basicData'

// components
import CardCommon from '../../../../components/CardCommon'
import LevelOptions from './LevelOptions'

interface Props {
	soundPress: () => void
}
export default function SelectLevel({ soundPress }: Props) {
	const dispatch = useAppDispatch()

	const handlePress = (lv: string) => {
		dispatch(setLevelBasic(lv))
		soundPress()
	}

	// change enums to string[]
	const listLevel: string[] = Object.values(Level)

	return (
		<CardCommon title="Elige un nivel">
			<View
				style={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'center',
					gap: 10,
				}}
			>
				{listLevel.map((ele) => {
					return (
						<Pressable onPress={() => handlePress(ele)} key={ele}>
							<LevelOptions title={ele} />
						</Pressable>
					)
				})}
			</View>
		</CardCommon>
	)
}
