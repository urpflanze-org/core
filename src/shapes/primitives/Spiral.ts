import { PI2 } from '../../math'
import {
	IDrawerProps,
	IPropArguments,
	IShapeLoopProps,
	IShapeLoopRepetition,
	IShapeLoopSettings,
	TSceneChildProp,
} from '../../types'
import { ShapeLoop } from '../ShapeLoop'

/**
 *
 * @category Core.Types
 */
export type TSpiralType = 'ARCHIMEDE' | 'HYPERBOLIC' | 'FERMAT' | 'LITUUS' | 'LOGARITHMIC'

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralProps<PropArguments extends IPropArguments = IPropArguments>
	extends IShapeLoopProps<PropArguments> {
	/**
	 * type of spiral
	 * @order -35
	 */
	spiral?: TSpiralType

	/**
	 * number of twists
	 * @order -34
	 */
	twists?: TSceneChildProp<number, PropArguments>

	/**
	 * twist start
	 * @order -33
	 */
	twistsStart?: TSceneChildProp<number, PropArguments>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralSettings<
	PropArguments extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ISpiralProps<PropArguments>,
		IShapeLoopSettings<PropArguments, D> {}

/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
class Spiral<
	PropArguments extends IPropArguments = IPropArguments,
	DrawerProps extends IDrawerProps<PropArguments> = IDrawerProps<PropArguments>
> extends ShapeLoop<PropArguments, DrawerProps, ISpiralProps<PropArguments>> {
	private spiral!: TSpiralType
	private r!: (angle: number) => number

	/**
	 * Spural types
	 *
	 * @static
	 * @type {{ [name in TSpiralType]: TSpiralType }}
	 * @memberof Spiral
	 */
	public static readonly types: { [name in TSpiralType]: TSpiralType } = {
		ARCHIMEDE: 'ARCHIMEDE',
		HYPERBOLIC: 'HYPERBOLIC',
		FERMAT: 'FERMAT',
		LITUUS: 'LITUUS',
		LOGARITHMIC: 'LOGARITHMIC',
	}

	/**
	 * Creates an instance of Spiral.
	 *
	 * @param {SpiralSettings} [settings={}]
	 * @memberof Spiral
	 */
	constructor(settings: ISpiralSettings<PropArguments, DrawerProps> = {}) {
		settings.type = 'Spiral'
		settings.bClosed = false

		settings.loopDependencies = (settings.loopDependencies || []).concat(['twists', 'twistsStart', 'spiral'])

		super(settings, true)

		this.props.spiral = settings.spiral ?? Spiral.types.ARCHIMEDE
		this.props.twists = settings.twists ?? 2
		this.props.twistsStart = settings.twistsStart ?? 0

		this.loop = {
			start: (propArguments: PropArguments) => PI2 * (this.getProp('twistsStart', propArguments) as number),
			end: (propArguments: PropArguments) =>
				PI2 *
				((this.getProp('twistsStart', propArguments) as number) + (this.getProp('twists', propArguments) as number)),
			inc: (propArguments: PropArguments) => {
				const twists = this.getProp('twists', propArguments) as number
				const rep = PI2 * twists
				const sideLength = this.getRepetitionSideLength(propArguments)
				const radius = 4 + Math.sqrt(sideLength[0] * sideLength[1])

				return rep / (radius * twists)
			},
			vertex: (shapeLoopRepetition: IShapeLoopRepetition): [number, number] => {
				const r = this.r(shapeLoopRepetition.current)
				return [r * Math.cos(shapeLoopRepetition.current), r * Math.sin(shapeLoopRepetition.current)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	protected generateLoopBuffer(propArguments: PropArguments): Float32Array {
		this.spiral = this.getProp('spiral', propArguments)
		this.r = Spiral.getRFromTSpiralType(this.spiral)

		return super.generateLoopBuffer(propArguments)
	}

	/**
	 * Point position and scale factor for spiral types
	 *
	 * @static
	 * @param {TSpiralType} spiral
	 * @returns {number}
	 * @memberof Spiral
	 */
	static getRFromTSpiralType(spiral: TSpiralType): (angle: number) => number {
		switch (spiral) {
			case Spiral.types.ARCHIMEDE:
				return angle => angle / 10
			case Spiral.types.HYPERBOLIC:
				return angle => (1 / angle) * 3
			case Spiral.types.FERMAT:
				return angle => angle ** 0.5 / 3
			case Spiral.types.LITUUS:
				return angle => angle ** -0.5
			case Spiral.types.LOGARITHMIC:
				return angle => Math.E ** (angle * 0.2) / 10
		}

		return angle => angle
	}
}

export { Spiral }
