import { IRoseProps, IRoseSettings, IDrawerProps, IPropArguments, IShapeLoopRepetition } from '../../types'

import { ShapeLoop } from '../../shapes/ShapeLoop'
import { PI2 } from '../../math'

/**
 * Rose shape
 *
 * @category Core.Primitives
 * @class Rose
 * @extends {ShapeLoop}
 */
class Rose<
	PropArgument extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArgument> = IDrawerProps<PropArgument>
> extends ShapeLoop<PropArgument, DrawerProps, IRoseProps<PropArgument>> {
	private k!: number

	/**
	 * Creates an instance of Rose.
	 *
	 * @param {IRoseSettings} [settings={}]
	 * @memberof Rose
	 */
	constructor(settings: IRoseSettings<PropArgument, DrawerProps> = {}) {
		settings.type = 'Rose'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['n', 'd'])

		super(settings, true)

		this.props.n = settings.n ?? 1
		this.props.d = settings.d ?? 2

		this.loop = {
			start: 0,
			end: (propArguments: PropArgument) =>
				Rose.getFinalAngleFromK(this.getProp('n', propArguments) as number, this.getProp('d', propArguments) as number),
			inc: (propArguments: PropArgument) => {
				const n = this.getProp('n', propArguments) as number
				const d = this.getProp('d', propArguments) as number
				const sideLength = this.getRepetitionSideLength(propArguments)
				const sides = Math.pow(sideLength[0] * sideLength[1], 0.45)
				const k = d < n ? n / d : 1.5

				return PI2 / (sides * k)
			},

			vertex: (shapeLoopRepetition: IShapeLoopRepetition): [number, number] => {
				const f = Math.cos(this.k * shapeLoopRepetition.current)

				return [f * Math.cos(shapeLoopRepetition.current), f * Math.sin(shapeLoopRepetition.current)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	protected generateLoopBuffer(propArguments: PropArgument): Float32Array {
		this.k = (this.getProp('n', propArguments) as number) / (this.getProp('d', propArguments) as number)

		return super.generateLoopBuffer(propArguments)
	}

	/**
	 * Return end angle of rose
	 *
	 * @static
	 * @param {number} n
	 * @param {number} d
	 * @returns {number}
	 * @memberof Rose
	 */
	static getFinalAngleFromK(n: number, d: number): number {
		if (n == d) return PI2

		const k = n / d
		const p = n * d

		if (!Number.isInteger(k) && k % 0.5 == 0) return 4 * Math.PI

		return Math.PI * d * (p % 2 == 0 ? 2 : 1)
	}
}

export { Rose }
