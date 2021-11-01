import { EAdaptMode } from '../../modifiers/Adapt'
import { IDrawerProps, IPropArguments, IShapeBufferSettings } from '../../types'
import { ShapeBuffer } from '../ShapeBuffer'

/**
 * Triangle ShapeBuffer
 *
 * @category Shapes.ShapeBuffer
 */
class Triangle<
	PropArgument extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArgument> = IDrawerProps<PropArgument>
> extends ShapeBuffer<PropArgument, DrawerProps> {
	static buffer = Float32Array.from([1, 0, -1, 1, -1, -1])

	/**
	 * Creates an instance of Triangleeee.
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Triangle
	 */
	constructor(settings: IShapeBufferSettings<PropArgument, DrawerProps> = {}) {
		settings.type = 'Triangle'
		settings.shape = Triangle.buffer
		settings.adaptMode = EAdaptMode.None

		super(settings)
	}
}

export { Triangle }
