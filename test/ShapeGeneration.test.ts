import tap from 'tap'
import { Rect, Shape } from '../dist/index'

///
let called = 0

let rect = new Rect({
	scale: propArguments => {
		called++
		return 1
	},
})
let container = new Shape({
	shape: rect,
	repetitions: 5,
})

container.generate()

tap.deepEqual(called, 1, 'check child shape generation')

///
const parentIndexed: Array<number> = []

rect = new Rect({
	scale: propArguments => {
		if (propArguments.parent) {
			parentIndexed.push(propArguments.parent.repetition.index)
		}
		return 1
	},
})
container = new Shape({
	shape: rect,
	repetitions: 5,
	shapeUseParent: true,
})

container.generate()

tap.deepEqual(parentIndexed, [1, 2, 3, 4, 5], 'check child shape generation when useParent')
