import tap from 'tap'
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
tap.deepEqual(distributePointsInBuffer(input, 1), Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 1, -1, 1]), 'add 1 point')

/**
 * expected
 * 1 --2-- 3
 * |       |
 * |       |
 * |       |
 * 6 --5-- 4
 */
tap.deepEqual(
	distributePointsInBuffer(input, 2),
	Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 1, 0, 1, -1, 1]),
	'add 2 points'
)

/**
 * expected
 * 1 --2-- 3
 * |       |
 * |       4
 * |       |
 * 7 --6-- 5
 */
tap.deepEqual(
	distributePointsInBuffer(input, 3),
	Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1]),
	'add 3 points'
)

/**
 * expected
 * 1 -2-3- 4
 * |       |
 * |       5
 * |       |
 * 8 --7-- 6
 */
tap.deepEqual(
	distributePointsInBuffer(input, 4),
	Float32Array.from([-1, -1, -(1 / 3), -1, 1 / 3, -1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1]),
	'add 4 points'
)

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
tap.deepEqual(
	distributePointsInBuffer(Float32Array.from([...input, -1, -1]), 4),
	Float32Array.from([-1, -1, 0, -1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, -1, 0, -1, -1]),
	'add 4 points on close shape'
)
