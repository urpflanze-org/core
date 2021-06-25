import { EAdaptMode } from '../../modifiers/Adapt'
import { IDrawerProps, IPropArguments, IShapeBufferSettings } from '../../types'
import { ShapeBuffer } from '../ShapeBuffer'

/**
 *
 * @category Core.Primitives
 * @class Rect
 * @extends {ShapeBuffer}
 */
class Rect<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeBuffer<PropArguments, DrawerProps> {
	/**
	 * Creates an instance of Rect.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Rect
	 */
	constructor(settings: IShapeBufferSettings<PropArguments, DrawerProps> = {}) {
		settings.type = 'Rect'
		settings.shape = [1, 1, -1, 1, -1, -1, 1, -1]
		settings.adaptMode = EAdaptMode.None

		super(settings)
	}
}

export { Rect }
