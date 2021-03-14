import { bindAnalytics } from './analytics.js'
import { bindNavigation } from './navigation/navigation.js'
import { bindRouting } from './routing/routing.js'

document.querySelector('#search').addEventListener('search', e => {
	bindNavigation(e.target.value)
})
document.querySelector('#search').addEventListener('keyup', e => {
	bindNavigation(e.target.value)
})
;(async () => {
	bindAnalytics()
	await bindNavigation()
	await bindRouting()
	document.querySelector('main').style.display = ''
})()
