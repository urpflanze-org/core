import { EAdaptMode, IDrawerProps } from '../../types/shape-base'
import { IShapeBufferSettings } from '../../types/shape-primitives'
import { ShapeBuffer } from '../../shapes/ShapeBuffer'
import { IPropArguments } from 'types/scene-child'

/**
 *
 * @category Core.Primitives
 * @class Rect
 * @extends {ShapeBuffer}
 */
class Rect<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ShapeBuffer<PA, D> {
	/**
	 * Creates an instance of Rect.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Rect
	 */
	constructor(settings: IShapeBufferSettings<PA, D> = {}) {
		settings.type = 'Rect'
		settings.shape = [-1, -1, 1, -1, 1, 1, -1, 1]
		settings.adaptMode = EAdaptMode.None

		super(settings)
	}
}

export { Rect }
