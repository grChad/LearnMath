import ButtonCommon from '../../../components/ButtonCommon'
// Store
import { useAppSelector } from '../../../hooks/store'

export default function ButtonPlay() {
	const { level, quantily, operation } = useAppSelector((state) => state.basic)

	const isDisabled = level === null || quantily === null || operation === null

	return (
		<ButtonCommon
			title="play"
			onPress={() => console.log('Probando un boton comun')}
			disabled={isDisabled}
		/>
	)
}
