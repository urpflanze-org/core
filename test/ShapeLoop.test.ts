import { PI2, ShapeLoop } from '../dist/cjs'

test('loop generation dependecy', () => {
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

	expect(sl.isStaticLoop()).toBe(true)
})

/////

test('loop generation dependecy', () => {
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

	expect(sl2.isStaticLoop()).toBe(true)
})

test('distance every 1 because loop is static (one time generation)', () => {
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

	expect(distanceValues).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
})

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

test('loop generation dependecy', () => {
	expect(sl3.isStaticLoop()).toBe(false)
})

test('loop generated each repetititon', () => {
	expect(distanceValues2).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5])
})
