import { IPropArguments, IStarProps, IStarSettings, IDrawerProps } from '../../types'

import { ShapeLoop } from '../../shapes/ShapeLoop'
import { PI2 } from '../../math'

/**
 * Polygon shape
 *
 * @category Core.Primitives
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
