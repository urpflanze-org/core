import { EAdaptMode, IDrawerProps, IPropArguments } from '../../types'

import { IShapeBufferSettings } from '../../types/shape-primitives'

import { ShapeBuffer } from '../ShapeBuffer'

/**
 *
 * @category Core.Primitives
 * @class Line
 * @extends {ShapeBuffer}
 */
class Line<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeBuffer<PropArguments, DrawerProps> {
	/**
	 * Two point, based on ShapeBuffer
	 *
	 * @param {ShapeBaseSettings} [settings={}]
	 * @memberof Line
	 */
	constructor(settings: IShapeBufferSettings<PropArguments, DrawerProps> = {}) {
		settings.type = 'Line'
		settings.shape = [-1, 0, 1, 0]
		settings.adaptMode = EAdaptMode.None

		settings.bClosed = false

		super(settings)
	}
}

export { Line }
