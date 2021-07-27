import { IShapeLoopProps, IShapeLoopSettings, IDrawerProps, IPropArguments } from '../../types'

import { PI2 } from '../../math'
import { ShapeLoop } from '../ShapeLoop'

/**
 *
 * @category Shapes.ShapeLoop
 * @class Circle
 * @extends {ShapeLoop}
 */
class Circle<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeLoop<PropArguments, DrawerProps, IShapeLoopProps<PropArguments>> {
	/**
	 * Based on ShapeLoop, the number of point (resolution) is based on sideLength.
	 *
	 * @param {ShapeLoopSettings} [settings={}]
	 * @memberof Circle
	 */
	constructor(settings: IShapeLoopSettings<PropArguments, DrawerProps> = {}) {
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
