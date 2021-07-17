import tap from 'tap'
import { Rect } from '../dist/cjs'

///

let rect = new Rect({
	sideLength: 10,
})

rect.generate()

tap.deepEqual(rect.isStatic(), true, 'check staticity if all props are static (no repetition generation)')
tap.deepEqual(
	rect.getBuffer(),
	Rect.buffer.map((v: number) => v * 10),
	'simple generation'
)

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

tap.deepEqual(rect.isStatic(), false, 'check staticity when pass a function')
tap.deepEqual(indexes, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'check repetition work')

///

const verticesLeftTop: Array<number> = []

rect = new Rect({
	repetitions: 1,
	sideLength: 10,
	anchor: ['left', 'top'],
	vertexCallback: (v: [number, number, number]) => {
		verticesLeftTop.push(v[0], v[1])
	},
})

rect.generate()

tap.deepEqual(
	verticesLeftTop,
	Rect.buffer.map((v: number) => v * 10 + 10),
	'check anchor point left top'
)

const verticesRightBottom: Array<number> = []

rect = new Rect({
	repetitions: 1,
	sideLength: 10,
	anchor: ['right', 'bottom'],
	vertexCallback: (v: [number, number, number]) => {
		verticesRightBottom.push(v[0], v[1])
	},
})

rect.generate()

tap.deepEqual(
	verticesRightBottom,
	Rect.buffer.map((v: number) => v * 10 - 10),
	'check anchor point right bottom'
)
