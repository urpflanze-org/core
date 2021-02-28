import { EShapePrimitiveAdaptMode } from '../../types/shape-base'
import { IShapeBufferSettings } from '../../types/shape-primitives'
import { ShapeBuffer } from '../ShapeBuffer'

/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
class Triangle extends ShapeBuffer {
	/**
	 * Creates an instance of Triangleeee.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Triangle
	 */
	constructor(settings: IShapeBufferSettings = {}) {
		settings.type = 'Triangle'
		settings.shape = [-1, -1, 1, 0, -1, 1]
		settings.adaptMode = EShapePrimitiveAdaptMode.None

		super(settings)
	}
}

export { Triangle }
