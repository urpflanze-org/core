import { PI2 } from '../../math'
import { ShapeLoop } from '../../shapes/ShapeLoop'
import {
	IDrawerProps,
	IPropArguments,
	IShapeLoopProps,
	IShapeLoopRepetition,
	IShapeLoopSettings,
	TSceneChildProp,
} from '../../types'

/**
 * For <mark>wx</mark>, <mark>wy</mark> and <mark>wx</mark> see Lissajous on <a target="_blank" href="https://en.wikipedia.org/wiki/Lissajous_curve">Wikipedia</a>
 * @category Shapes.Settings
 */
export interface ILissajousProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * wx coefficient
	 * @order -37
	 */
	wx?: TSceneChildProp<number, PropArguments>

	/**
	 * wy coefficient
	 * @order -36
	 */
	wy?: TSceneChildProp<number, PropArguments>

	/**
	 * wz coefficient
	 * @order -35
	 */
	wz?: TSceneChildProp<number, PropArguments>
}

/**
 * http://paulbourke.net/geometry/supershape/
 *
 * @category Shapes.Settings
 */
export interface ILissajousSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ILissajousProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 * Lissajous shape
 *
 * @category Shapes.ShapeLoop
 * @class Lissajous
 * @extends {ShapeLoop}
 */
class Lissajous<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeLoop<PropArguments, DrawerProps, ILissajousProps<PropArguments>> {
	private wx!: number
	private wy!: number
	private wz!: number

	/**
	 * Creates an instance of Lissajous.
	 *
	 * @param {ILissajousSettings} [settings={}]
	 * @memberof Lissajous
	 */
	constructor(settings: ILissajousSettings<PropArguments, DrawerProps> = {}) {
		settings.type = 'Lissajous'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['wx', 'wy', 'wz'])

		super(settings, true)

		this.props.wx = settings.wx || 1
		this.props.wy = settings.wy || 2
		this.props.wz = settings.wz || 0

		this.loop = {
			start: 0,
			end: PI2,
			inc: propArguments => {
				const wx = this.getProp('wx', propArguments) as number
				const wy = this.getProp('wy', propArguments) as number

				const ratio = wx == wy ? ShapeLoop.PId2 : 0.5 - Math.min(49, wx + wy) * 0.01
				const sideLength = this.getRepetitionSideLength(propArguments)
				return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ratio
			},
			vertex: (shapeLoopRepetition: IShapeLoopRepetition): [number, number] => {
				return this.wx === this.wy
					? [Math.cos(shapeLoopRepetition.current + this.wz), Math.sin(shapeLoopRepetition.current)]
					: [Math.cos(this.wx * shapeLoopRepetition.current + this.wz), Math.sin(this.wy * shapeLoopRepetition.current)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	protected generateLoopBuffer(propArguments: PropArguments): Float32Array {
		this.wx = this.getProp('wx', propArguments, 1)
		this.wy = this.getProp('wy', propArguments, 2)
		this.wz = this.getProp('wz', propArguments, 2)

		return super.generateLoopBuffer(propArguments)
	}
}

export { Lissajous }
