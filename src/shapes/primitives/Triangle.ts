import { IShapeBufferSettings, EAdaptMode, IDrawerProps, IPropArguments } from '../../types'

import { ShapeBuffer } from '../ShapeBuffer'

/**
 * Triangle ShapeBuffer
 *
 * @category Core.Primitives
 */
class Triangle<
	PropArgument extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArgument> = IDrawerProps<PropArgument>
> extends ShapeBuffer<PropArgument, DrawerProps> {
	/**
	 * Creates an instance of Triangleeee.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Triangle
	 */
	constructor(settings: IShapeBufferSettings<PropArgument, DrawerProps> = {}) {
		settings.type = 'Triangle'
		settings.shape = [-1, -1, 1, 0, -1, 1]
		settings.adaptMode = EAdaptMode.None

		super(settings)
	}
}

export { Triangle }
