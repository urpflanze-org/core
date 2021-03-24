import tap from 'tap'
import { PI2, Rect, ShapeLoop } from '../src/index'

///

let rect = new Rect({
	sideLength: 10,
})

rect.generate()

tap.deepEqual(rect.isStatic(), true, 'check staticity if all props are static (no repetition generation)')
tap.deepEqual(rect.getBuffer(), [-10, -10, 10, -10, 10, 10, -10, 10], 'simple generation')

///

const indexes: Array<number> = []

rect = new Rect({
	repetitions: 10,
	sideLength: 10,
	scale: ({ repetition }) => {
		indexes.push(repetition.index)
		return repetition.offset
	},
})

rect.generate()

tap.deepEqual(rect.isStatic(), false, 'check staticity when pass a function (repetition regeneration)')
tap.deepEqual(indexes, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'check repetition work')

///
