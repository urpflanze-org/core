import type { ISceneChildPropArguments } from '../../types/scene-child'
import type { IPolygonProps, IPolygonSettings } from '../../types/shape-primitives'

import { ShapeLoop } from '../../shapes/ShapeLoop'
import { PI2 } from '../../math'

/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class Polygon
 * @extends {ShapeLoop}
 */
class Polygon extends ShapeLoop<IPolygonProps> {
	constructor(settings: IPolygonSettings = {}) {
		settings.type = settings.type || 'Polygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber'])

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: PI2,
			inc: (propArguments: ISceneChildPropArguments) => {
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
