import { EAdaptMode } from '../../types/shape-base'
import { IShapeBufferSettings } from '../../types/shape-primitives'

import { ShapeBuffer } from '../ShapeBuffer'

/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line extends ShapeBuffer {
	/**
	 * Creates an instance of Line.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Line
	 */
	constructor(settings: IShapeBufferSettings = {}) {
		settings.type = 'Line'
		settings.shape = [-1, 0, 1, 0]
		settings.adaptMode = EAdaptMode.None

		settings.bClosed = false

		super(settings)
	}
}

export { Line }
