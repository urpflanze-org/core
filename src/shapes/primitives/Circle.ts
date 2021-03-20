import type { IShapeLoopProps, IShapeLoopSettings } from '../../types/shape-primitives'

import { PI2 } from '../../math'
import { ShapeLoop } from '../ShapeLoop'
import { IPropArguments } from 'types/scene-child'
import { IDrawerProps } from 'types/shape-base'

/**
 *
 * @category Core.Primitives
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ShapeLoop<IShapeLoopProps<PA>, PA, D> {
	/**
	 * Based on ShapeLoop, the number of point (resolution) is based on sideLength.
	 *
	 * @param {ShapeLoopSettings} [settings={}]
	 * @memberof Circle
	 */
	constructor(settings: IShapeLoopSettings<PA, D> = {}) {
		settings.type = 'Circle'

		super(settings, true)

		this.loop = {
			start: 0,
			end: PI2,
			inc: propArguments => {
				const sideLength = this.getRepetitionSideLength(propArguments)
				return (1 / Math.pow(sideLength[0] * sideLength[1], 0.25)) * ShapeLoop.PId2
			},
			vertex: shapeLoopRepetition => [Math.cos(shapeLoopRepetition.current), Math.sin(shapeLoopRepetition.current)],
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}
}

export { Circle }
