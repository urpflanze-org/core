import { IPropArguments } from 'types/scene-child'
import { EAdaptMode, IDrawerProps } from '../../types/shape-base'
import { IShapeBufferSettings } from '../../types/shape-primitives'

import { ShapeBuffer } from '../ShapeBuffer'

/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ShapeBuffer<PA, D> {
	/**
	 * Two point, based on ShapeBuffer
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Line
	 */
	constructor(settings: IShapeBufferSettings<PA, D> = {}) {
		settings.type = 'Line'
		settings.shape = [-1, 0, 1, 0]
		settings.adaptMode = EAdaptMode.None

		settings.bClosed = false

		super(settings)
	}
}

export { Line }
