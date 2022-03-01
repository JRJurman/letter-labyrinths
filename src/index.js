import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start } from 'tram-one'
import './styles.css'
import RenderCards from './RenderCards'

const html = registerHtml({
	RenderCards: RenderCards,
})

const home = () => {
	return html`<main><RenderCards /></main>`
}

// start the app on a div with id="app"
start(home, '#app')
