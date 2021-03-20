import { IPropArguments } from 'types/scene-child'
import { EAdaptMode, IDrawerProps } from '../../types/shape-base'
import { IShapeBufferSettings } from '../../types/shape-primitives'
import { ShapeBuffer } from '../ShapeBuffer'

/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
class Triangle<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ShapeBuffer<PA, D> {
	/**
	 * Creates an instance of Triangleeee.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Triangle
	 */
	constructor(settings: IShapeBufferSettings<PA, D> = {}) {
		settings.type = 'Triangle'
		settings.shape = [-1, -1, 1, 0, -1, 1]
		settings.adaptMode = EAdaptMode.None

		super(settings)
	}
}

export { Triangle }
