import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

interface Props {
	size: number
	fill?: string
	focused?: boolean
	hasStroke?: boolean
	stroke?: string
	bgColor?: string
}

export const IconStar = ({ size, fill, hasStroke = false, stroke = 'black' }: Props) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 576 512">
			<Path
				d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176 56 176c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2l-158.5 0L310.9 16.7z"
				stroke={stroke}
				strokeWidth={hasStroke ? 20 : 0}
				fill={fill}
			/>
		</Svg>
	)
}

export const IconRoundedSquare = ({ size = 80, hasStroke, stroke = 'black' }: Props) => (
	<Svg width={size} height={size} viewBox="0 0 180 180">
		<Defs>
			<LinearGradient id="grad" x1="0.5" y1="1" x2="0.5" y2="0">
				<Stop offset="0" stopColor={stroke} stopOpacity="1" />
				<Stop offset="1" stopColor="white" stopOpacity="1" />
			</LinearGradient>
		</Defs>
		<Path
			fill="url(#grad)"
			strokeWidth={hasStroke ? 10 : 0}
			stroke={stroke}
			strokeLinecap="round"
			strokeDasharray="402.233, 12.1889"
			strokeDashoffset="304.722"
			d="M 29.673966,32.363368 C 44.380682,17.828761 73.160423,11.643582 88.500737,12.049072 c 25.385253,0.671008 48.153873,5.887595 63.453323,22.141604 13.68125,14.53482 15.98616,37.612087 16.0128,57.49421 0.0242,18.070014 -6.07852,42.169624 -14.41323,52.292174 -15.74095,19.11742 -45.47829,25.30108 -70.136134,23.76753 C 60.709418,166.33229 33.839316,161.9894 22.091558,138.02524 10.327253,114.02733 12.164773,94.015425 12.101783,81.866804 12.011078,64.373557 17.178526,44.712578 29.673966,32.363368 Z"
		/>
		<Path
			fill="#e6f3f2"
			d="M 30.596869,34.068459 C 44.089435,18.263397 75.314851,14.361225 89.869465,14.744814 c 24.085085,0.634765 45.423395,5.680828 60.203375,20.945659 12.57955,12.992212 15.49701,33.716883 16.16465,51.788874 0.68212,18.463883 -4.65816,44.410503 -12.56599,53.986293 -14.93474,18.08483 -32.88173,16.60642 -50.80114,18.31943 C 80.170695,161.95505 47.264415,151.94435 37.99038,140.85591 30.381359,131.75824 24.915006,119.15045 20.412616,98.1484 16.943766,81.967448 16.554317,50.51777 30.596869,34.068459 Z"
		/>
	</Svg>
)
