import { EAdaptMode } from '../../modifiers/Adapt'
import { IDrawerProps, IPropArguments, IShapeBufferSettings } from '../../types'

import { ShapeBuffer } from '../ShapeBuffer'

/**
 *
 * @category Shapes.ShapeBuffer
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeBuffer<PropArguments, DrawerProps> {
	static buffer = [-1, 0, 1, 0]

	/**
	 * Two point, based on ShapeBuffer
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Line
	 */
	constructor(settings: IShapeBufferSettings<PropArguments, DrawerProps> = {}) {
		settings.type = 'Line'
		settings.shape = Line.buffer
		settings.adaptMode = EAdaptMode.None

		settings.bClosed = false

		super(settings)
	}

	/**
	 * @link https://gist.github.com/pborissow/5c92b77a804688385c77749d1187ba07
	 */
	public static toPolygon(buffer: Float32Array, thickness: number | Array<number>): Float32Array {
		const solidified: Array<number> = []

		//Convert thickness into an array as needed
		if (!Array.isArray(thickness)) {
			const _thickness: number = thickness
			const points = buffer.length / 2
			thickness = new Array(points)

			for (let i = 0; i < points; i++) {
				thickness[i] = _thickness
			}
		}

		function getOffsets(ax: number, ay: number, bx: number, by: number, thickness: number) {
			const dx = bx - ax,
				dy = by - ay,
				len = Math.sqrt(dx * dx + dy * dy),
				scale = thickness / (2 * len)
			return [-scale * dy, scale * dx]
		}

		function getIntersection(
			a1: [number, number],
			b1: [number, number],
			a2: [number, number],
			b2: [number, number]
		): [number, number] | undefined {
			// directional constants
			const k1 = (b1[1] - a1[1]) / (b1[0] - a1[0]),
				k2 = (b2[1] - a2[1]) / (b2[0] - a2[0])
			// if the directional constants are equal, the lines are parallel

			if (Math.abs(k1 - k2) < 0.00001) {
				return
			}

			// y offset constants for both lines
			const m1 = a1[1] - k1 * a1[0]
			const m2 = a2[1] - k2 * a2[0]

			// compute x
			const x = (m1 - m2) / (k2 - k1)

			// use y = k * x + m to get y coordinate
			const y = k1 * x + m1

			return [x, y]
		}

		let bFirst,
			bLast,
			prevA: [[number, number], [number, number]] = [
				[0, 0],
				[0, 0],
			],
			prevB: [[number, number], [number, number]] = [
				[0, 0],
				[0, 0],
			]

		for (let i = 0, len = buffer.length - 2; i < len; i += 2) {
			bFirst = i === 0
			bLast = i === len - 2

			const off = getOffsets(buffer[i], buffer[i + 1], buffer[i + 2], buffer[i + 3], thickness[i])

			const p0a: [number, number] = [buffer[i] + off[0], buffer[i + 1] + off[1]]
			const p1a: [number, number] = [buffer[i + 2] + off[0], buffer[i + 3] + off[1]]

			const p0b: [number, number] = [buffer[i] - off[0], buffer[i + 1] - off[1]]
			const p1b: [number, number] = [buffer[i + 2] - off[0], buffer[i + 3] - off[1]]

			if (!bFirst) {
				const interA = getIntersection(prevA[0], prevA[1], p0a, p1a)
				if (interA) {
					solidified.unshift(interA[1])
					solidified.unshift(interA[0])
				}
				const interB = getIntersection(prevB[0], prevB[1], p0b, p1b)
				if (interB) {
					solidified.push(interB[0])
					solidified.push(interB[1])
				}
			}

			if (bFirst) {
				solidified.unshift(p0a[1])
				solidified.unshift(p0a[0])
				solidified.push(p0b[0])
				solidified.push(p0b[1])
			}

			if (bLast) {
				solidified.unshift(p1a[1])
				solidified.unshift(p1a[0])
				solidified.push(p1b[0])
				solidified.push(p1b[1])
			}

			if (!bLast) {
				prevA = [p0a, p1a]
				prevB = [p0b, p1b]
			}
		}

		return Float32Array.from(solidified)
	}
}

export { Line }
