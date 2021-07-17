import tap from 'tap'
import { PI2, ShapeLoop } from '../dist/cjs'

const sl = new ShapeLoop({
	sideLength: 1,
	loop: {
		start: 0,
		end: PI2,
		inc: PI2 / 20,
		vertex: ({ current }) => [Math.cos(current), Math.sin(current)],
	},
})

sl.generate()

tap.deepEqual(sl.isStaticLoop(), true, 'loop generation dependecy')

/////

const distanceValues: Array<number> = []
const sl2: ShapeLoop = new ShapeLoop({
	repetitions: 10,
	sideLength: 1,
	distance: ({ repetition }) => repetition.index,
	loop: {
		start: 0,
		end: PI2,
		inc: PI2 / 20,
		vertex: ({ current }, propArguments) => {
			const currentDistance = sl2.getProp('distance', propArguments)
			distanceValues.push(currentDistance)
			return [Math.cos(currentDistance), Math.sin(currentDistance)]
		},
	},
})

sl2.generate()

tap.deepEqual(sl2.isStaticLoop(), true, 'loop generation dependecy')
tap.deepEqual(
	distanceValues,
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	'distance every 1 because loop is static (one time generation)'
)

/////

const distanceValues2: Array<number> = []
const sl3: ShapeLoop = new ShapeLoop({
	repetitions: 5,
	sideLength: 1,
	distance: ({ repetition }) => repetition.index,
	loop: {
		start: 0,
		end: 3,
		inc: 1,
		vertex: ({ current }, propArguments) => {
			const currentDistance = sl3.getProp('distance', propArguments)
			distanceValues2.push(currentDistance)
			return [Math.cos(currentDistance), Math.sin(currentDistance)]
		},
	},
	loopDependencies: ['distance'],
})

sl3.generate()

tap.deepEqual(sl3.isStaticLoop(), false, 'loop generation dependecy')
tap.deepEqual(distanceValues2, [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 'loop generated each repetititon')
