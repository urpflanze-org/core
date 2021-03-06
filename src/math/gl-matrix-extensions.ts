import { glMatrix, mat4 } from 'gl-matrix'

export const VEC3_ZERO: [number, number, number] = [0, 0, 0]
export const VEC3_ONE: [number, number, number] = [1, 1, 1]
export const VEC2_ZERO: [number, number] = [0, 0]
export const VEC2_ONE: [number, number] = [1, 1]

glMatrix.setMatrixArrayType(Array)

/**
 * Skew matrix
 *
 * @internal
 * @ignore
 */
export function fromSkew(out: mat4, skew: [number, number]): mat4 {
	out[0] = 1
	out[1] = Math.tan(skew[1])
	out[2] = 0
	out[3] = 0
	out[4] = Math.tan(skew[0])
	out[5] = 1
	out[6] = 0
	out[7] = 0
	out[8] = 0
	out[9] = 0
	out[10] = 1
	out[11] = 0
	out[12] = 0
	out[13] = 0
	out[14] = 0
	out[15] = 1
	return out
}

/**
 * number to vec 2
 *
 * @internal
 * @ignore
 */
export function toVec2(x: number | Array<number>): [number, number] {
	if (Array.isArray(x)) return [x[0], x[1]]
	return [x, x]
}

/**
 * number to vec 3
 *
 * @internal
 * @ignore
 */
export function toVec3(x: number | Array<number>, defaultZValue = 0): [number, number, number] {
	if (Array.isArray(x)) {
		return [x[0], x[1], defaultZValue]
	}
	return [x, x, defaultZValue]
}
