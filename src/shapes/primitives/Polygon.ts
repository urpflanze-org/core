import type { IPropArguments } from '../../types/scene-child'
import type { IPolygonProps, IPolygonSettings } from '../../types/shape-primitives'

import { ShapeLoop } from '../../shapes/ShapeLoop'
import { PI2 } from '../../math'
import { IDrawerProps } from 'types/shape-base'

/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Polygon<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ShapeLoop<IPolygonProps<PA>, PA, D> {
	/**
	 * Is based on ShapeLoop and you can pass `sideNumber` property to define
	 * a number of sides.
	 *
	 * @param settings
	 */
	constructor(settings: IPolygonSettings<PA, D> = {}) {
		settings.type = settings.type || 'Polygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber'])

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: PI2,
			inc: (propArguments: PA) => {
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
