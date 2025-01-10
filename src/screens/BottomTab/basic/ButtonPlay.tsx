import ButtonCommon from '../../../components/ButtonCommon'
import { useNavigation } from '@react-navigation/native'
import type { HomeNavigationProp } from '../../../types/navigation'

// Store
import { useAppSelector } from '../../../hooks/store'

export default function ButtonPlay() {
	const navigation = useNavigation<HomeNavigationProp>()
	const { level, quantily, operation } = useAppSelector((state) => state.basic)

	const isDisabled = level === null || quantily === null || operation === null

	const handlePress = () => {
		navigation.navigate('BasicGame')
	}

	return <ButtonCommon title="play" onPress={handlePress} disabled={isDisabled} />
}
