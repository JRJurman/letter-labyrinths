import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import CompassCard from './compass-card'
import buildCompasses from './build-compasses'
import './styles.css'

const compasses = buildCompasses()

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	CompassCard: CompassCard,
})

const home = () => {
	const compassCards = compasses.map((compassData) => {
		return html`<CompassCard compassData=${compassData} />`
	})
	return html` <main>${compassCards}</main>`
}

// start the app on a div with id="app"
start(home, '#app')
