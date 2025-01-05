import { View, Pressable } from 'react-native'

// Store
import { setLevelBasic } from '../../../../store/ducks/basicSlice'
import { useAppDispatch } from '../../../../hooks/store'

import { BasicLevelOptions as Level } from '../../../../constants/basicData'

// components
import CardCommon from '../../../../components/CardCommon'
import ButtonLevel from './ButtonLevel'

const MAX_HEIGHT_BUTTON = 35

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
			<View style={{ flexDirection: 'row', columnGap: 10 }}>
				{listLevel.map((ele) => {
					return (
						<Pressable
							onPress={() => handlePress(ele)}
							key={ele}
							style={{
								backgroundColor: 'rgb(47, 143, 208)',
								borderRadius: 10,
								height: MAX_HEIGHT_BUTTON,
							}}
						>
							<ButtonLevel title={ele} maxHeight={MAX_HEIGHT_BUTTON} />
						</Pressable>
					)
				})}
			</View>
		</CardCommon>
	)
}
