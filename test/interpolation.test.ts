import { distributePointsInBuffer } from '../dist/cjs'

///
/**
 * 1 ----- 2
 * |       |
 * |       |
 * |       |
 * 4 ----- 3
 */
const input = Float32Array.from([-1, -1, 1, -1, 1, 1, -1, 1])

/**
 * expected
 * 1 --2-- 3
 * |       |
 * |       |
 * |       |
 * 5 ----- 4
 */
test('add 1 point', () => {
	expect(distributePointsInBuffer(input, 1)).toEqual(Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 1, -1, 1]))
})

/**
 * expected
 * 1 --2-- 3
 * |       |
 * |       |
 * |       |
 * 6 --5-- 4
 */
test('add 2 points', () => {
	expect(distributePointsInBuffer(input, 2)).toEqual(Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 1, 0, 1, -1, 1]))
})

/**
 * expected
 * 1 --2-- 3
 * |       |
 * |       4
 * |       |
 * 7 --6-- 5
 */
test('add 3 points', () => {
	expect(distributePointsInBuffer(input, 3)).toEqual(Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1]))
})

/**
 * expected
 * 1 -2-3- 4
 * |       |
 * |       5
 * |       |
 * 8 --7-- 6
 */
test('add 4 points', () => {
	expect(distributePointsInBuffer(input, 4)).toEqual(
		Float32Array.from([-1, -1, -(1 / 3), -1, 1 / 3, -1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1])
	)
})

/**
 * add 4 point
 *
 * input
 *
 * 1/5 ----- 2
 * |       |
 * |       |
 * |       |
 * 4 ----- 3
 * --------
 * expected
 * 1/9 -2- 3
 * |       |
 * 8       4
 * |       |
 * 7 --6-- 5
 */
test('add 4 points on close shape', () => {
	expect(distributePointsInBuffer(Float32Array.from([...input, -1, -1]), 4)).toEqual(
		Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, -1, 0, -1, -1])
	)
})
