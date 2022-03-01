import { registerSvg } from 'tram-one'
import CompassCard from './CompassCard'
import compasses from './compasses/all-compasses.json'
import './styles.css'

const svg = registerSvg({
	CompassCard: CompassCard,
})

const cardWidth = 368
const cardHeight = 327

export default () => {
	const compassCards = []
	let x = 0
	let y = 0
	compasses.forEach((compassData, index) => {
		if (!(index % 2)) {
			x++
		}
		if (index % 2) {
			y++
			x--
		}
		compassCards.push(
			svg`<CompassCard compassData=${compassData}
			x=${x * cardWidth} y=${y * cardHeight} />`
		)
	})

	// there are 69 compasses

	const height = cardHeight * 35
	const width = cardWidth * 2

	return svg`
		<svg class="render-cards" width="${width}px" height="${height}px">${compassCards}</svg>
	`
}
