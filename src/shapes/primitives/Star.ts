import { PI2 } from '../../math'
import { ShapeLoop } from '../../shapes/ShapeLoop'
import { IDrawerProps, IPropArguments, IShapeLoopProps, IShapeLoopSettings, TSceneChildProp } from '../../types'

/**
 *
 * @category Shapes.Settings
 */
export interface IStarProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * spikes {int}
	 * @order -35
	 */
	spikes?: TSceneChildProp<number, PropArguments>

	/**
	 * spikes inner radius, from 0 to 1 (1 as sideLength)
	 * @order -36
	 */
	innerRadius?: TSceneChildProp<number, PropArguments>
}

/**
 *
 * @category Shapes.Settings
 */
export interface IStarSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends IStarProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 * Polygon shape
 *
 * @category Shapes.ShapeLoop
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Star<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeLoop<PropArguments, DrawerProps, IStarProps<PropArguments>> {
	private spikes!: number

	private innerRadius!: number

	private inc!: number

	/**
	 * Is based on ShapeLoop and you can pass `spikes` property to define
	 * a number of spikes and `innerRadius`
	 *
	 * @param settings
	 */
	constructor(settings: IStarSettings<PropArguments, DrawerProps> = {}) {
		settings.type = settings.type || 'Polygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['spikes', 'innerRadius'])

		super(settings, true)

		this.props.spikes = settings.spikes
		this.props.innerRadius = settings.innerRadius

		this.loop = {
			start: 0,
			end: PI2,
			inc: (propArguments: PropArguments) => {
				// dyamic binding in `generateLoopBuffer`
				return this.inc
			},
			vertex: shapeLoopRepetition => {
				const angle = (Math.PI / this.spikes) * shapeLoopRepetition.index
				const radius = shapeLoopRepetition.index % 2 === 0 ? 1 : this.innerRadius
				return [Math.cos(angle) * radius, Math.sin(angle) * radius]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	protected generateLoopBuffer(propArguments: PropArguments): Float32Array {
		this.spikes = this.getProp('spikes', propArguments, 5)
		this.innerRadius = this.getProp('innerRadius', propArguments, 0.5)
		this.inc = Math.PI / this.spikes

		return super.generateLoopBuffer(propArguments)
	}
}

export { Star }
