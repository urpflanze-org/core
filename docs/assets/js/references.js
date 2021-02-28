const emptyCategory = ''

export const NavReferences = { [emptyCategory]: { [emptyCategory]: {} } }
export const References = {}

export function bindReferencesToNav(RawReferences) {
	RawReferences.sort((a, b) => a.order - b.order).forEach(reference => {
		References[reference.name] = reference

		reference.category = reference.category || 'Other'
		if (reference.category) {
			const categories = reference.category.split('.')
			let r = NavReferences
			let level = 0
			categories.forEach(category => {
				if (typeof r[category] === 'undefined') r[category] = {}
				r = r[category]
				level++
			})
			if (level === 2) {
				r[reference.name] = 'ref/' + reference.name
			} else {
				if (typeof r[emptyCategory] === 'undefined') {
					r[emptyCategory] = {}
				}
				r[emptyCategory][reference.name] = 'ref/' + reference.name
			}
		} else {
			NavReferences[emptyCategory][emptyCategory][reference.name] = 'ref/' + reference.name
		}
	})
}
