/**
 * Return logarith value and base
 *
 * @category Utilities
 *
 * @param n number
 * @param base number
 */
export const log = (n: number, base: number) => Math.log(n) / Math.log(base)

/**
 * @category Utilities
 */
export const PI2 = Math.PI * 2

/**
 * @category Utilities
 */
export const PHI = (1 + Math.sqrt(5)) / 2

/**
 * Return a positive module of positive or negative value
 *
 * @category Utilities
 *
 * @param value number
 * @param base number
 */
export const mod = (value: number, base: number): number => {
	const result = value % base

	return result < 0 ? result + base : result
}
