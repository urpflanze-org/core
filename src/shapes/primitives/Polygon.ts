import { IPropArguments, IPolygonProps, IPolygonSettings, IDrawerProps } from '../../types'

import { ShapeLoop } from '../../shapes/ShapeLoop'
import { PI2 } from '../../math'

/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Polygon<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeLoop<PropArguments, DrawerProps, IPolygonProps<PropArguments>> {
	/**
	 * Is based on ShapeLoop and you can pass `sideNumber` property to define
	 * a number of sides.
	 *
	 * @param settings
	 */
	constructor(settings: IPolygonSettings<PropArguments, DrawerProps> = {}) {
		settings.type = settings.type || 'Polygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber'])

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: PI2,
			inc: (propArguments: PropArguments) => {
				return PI2 / this.getProp('sideNumber', propArguments, 5)
			},
			vertex: shapeLoopRepetition => {
				return [Math.cos(shapeLoopRepetition.current), Math.sin(shapeLoopRepetition.current)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}
}

export { Polygon }
