import { Rect, Shape } from '../dist/cjs'

///

test('check child shape generation', () => {
	let called = 0

	const rect = new Rect({
		scale: propArguments => {
			called++
			return 1
		},
	})

	const container = new Shape({
		shape: rect,
		repetitions: 5,
	})

	container.generate()

	expect(called).toBe(1)
})

///

test('check child shape generation when useParent', () => {
	const parentIndexed: Array<number> = []

	const rect = new Rect({
		scale: propArguments => {
			if (propArguments.parent) {
				parentIndexed.push(propArguments.parent.repetition.index)
			}
			return 1
		},
	})
	const container = new Shape({
		shape: rect,
		repetitions: 5,
		shapeUseParent: true,
	})

	container.generate()

	expect(parentIndexed).toEqual([1, 2, 3, 4, 5])
})
