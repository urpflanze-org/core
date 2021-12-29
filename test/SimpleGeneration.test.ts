import { Rect } from '../dist/cjs'

///

test('check staticity if all props are static (no repetition generation)', () => {
	const rect = new Rect({
		sideLength: 10,
		anchor: [0, 0],
	})

	rect.generate()

	expect(rect.isStatic()).toBe(true)
})

test('simple generation', () => {
	const rect = new Rect({
		sideLength: 10,
		anchor: [0, 0],
	})

	rect.generate()

	expect(rect.getBuffer()).toEqual(Rect.buffer.map((v: number) => v * 10))
})

///

test('check staticity when pass a function', () => {
	const indexes: Array<number> = []

	const rect = new Rect({
		repetitions: 10,
		sideLength: 10,
		scale: ({ repetition }) => {
			indexes.push(repetition.index)
			return repetition.offset
		},
	})

	rect.generate()

	expect(rect.isStatic()).toBe(false)
})

test('check repetition work', () => {
	const indexes: Array<number> = []

	const rect = new Rect({
		repetitions: 10,
		sideLength: 10,
		scale: ({ repetition }) => {
			indexes.push(repetition.index)
			return repetition.offset
		},
	})

	rect.generate()

	expect(indexes).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

///

test('check anchor point left top', () => {
	const verticesLeftTop: Array<number> = []

	const rect = new Rect({
		repetitions: 1,
		sideLength: 10,
		anchor: ['left', 'top'],
		vertexCallback: (v: [number, number, number]) => {
			verticesLeftTop.push(v[0], v[1])
		},
	})

	rect.generate()

	expect(Float32Array.from(verticesLeftTop)).toEqual(Rect.buffer.map((v: number) => v * 10 + 10))
})

test('check anchor point right bottom', () => {
	const verticesRightBottom: Array<number> = []

	const rect = new Rect({
		repetitions: 1,
		sideLength: 10,
		anchor: ['right', 'bottom'],
		vertexCallback: (v: [number, number, number]) => {
			verticesRightBottom.push(v[0], v[1])
		},
	})

	rect.generate()

	expect(Float32Array.from(verticesRightBottom)).toEqual(Rect.buffer.map((v: number) => v * 10 - 10))
})
