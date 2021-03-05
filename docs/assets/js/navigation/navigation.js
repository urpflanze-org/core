import { bindReferencesToNav, NavReferences } from '../references.js'
import createList from './create-list.js'

document.getElementById('menu_btn').addEventListener('click', openMenu, { passive: true })
document.getElementById('aside-bg').addEventListener('click', closeMenu, { passive: true })

export async function bindNavigation(search) {
	const nav = document.querySelector('#nav')

	nav.innerHTML = ''
	nav.append(
		createList({
			'': {
				'': {
					Readme: 'readme',
					Changelog: 'changelog',
				},
			},
		})
	)

	const api = document.createElement('h1')
	api.innerText = 'API'
	nav.append(api)

	const response = await fetch('assets/references.json')
	const RawReferences = await response.json()
	bindReferencesToNav(RawReferences)
	nav.append(createList(NavReferences, search))
}

export function openMenu() {
	document.querySelector('aside').classList.add('open')
	document.body.style.top = `-${window.scrollY}px`
	document.body.style.position = 'fixed'
}

export function closeMenu() {
	const scrollY = parseInt(document.body.style.top || '0')
	document.querySelector('aside').classList.remove('open')
	document.body.style.position = ''
	document.body.style.overflow = ''
	window.scrollTo(0, -scrollY)
}

export function activateLink(url) {
	const links = document.querySelectorAll('.link')

	for (let i = 0, len = links.length; i < len; i++) links[i].classList.remove('link--active')

	const a = document.querySelector(`a[href="${url}"]`)

	a && a.classList.add('link--active')
}
