import { IPropArguments, TSceneChildProp } from '../types'
import { IShapeLoopRepetition } from './repetitions'
import { EAdaptMode, IDrawerProps, IShapePrimitiveProps, IShapePrimitiveSettings } from './shape-base'

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBufferProps<PA extends IPropArguments = IPropArguments> extends IShapePrimitiveProps<PA> {}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBufferSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends IShapeBufferProps<PA>,
		IShapePrimitiveSettings<PA, D> {
	/**
	 * [x1,y1, x2,y1-, ...., xn, yn]
	 * @order -30
	 */
	shape?: Float32Array | Array<number>

	/**
	 * Adapt buffer mode, see <a href="[base_url]/EAdaptMode">EAdaptMode</a> for more details
	 * @order -16
	 */
	adaptMode?: EAdaptMode
}

/**
 *
 * @category Core.Types
 */
export type TShapeLoopGeneratorFormula<PA extends IPropArguments = IPropArguments> = (
	shapeLoopRepetition: IShapeLoopRepetition,
	propArguments: PA
) => [number, number]

/**
 * Object to create a shape from a loop from <mark>start</mark>
 * to <mark>end</mark> by <mark>inc</mark> increments.
 *
 * @example
 * ```javascript
 *  //
 *  // Example of creating a circle of 100 points
 *  //
 * ShapeLoop({
 * 	loop: {
 * 		start: 0,
 * 		end: 100,
 * 		inc: 1,
 * 		vertex: ({ offset }) => [Math.cos(offset * Math.PI * 2), Math.sin(offset * Math.PI * 2)]
 * 	}
 * })
 * ```
 * @category Core.Interfaces
 */
export interface IShapeLoopGenerator<PA extends IPropArguments = IPropArguments> {
	start?: TSceneChildProp<number, PA>
	end?: TSceneChildProp<number, PA>
	inc?: TSceneChildProp<number, PA>
	vertex?: TShapeLoopGeneratorFormula<PA>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeLoopProps<PA extends IPropArguments = IPropArguments> extends IShapePrimitiveProps<PA> {
	/**
	 * <a href="[base_url]/IShapeLoopGenerator">IShapeLoopGenerator</a> for more details
	 * @order -30
	 */
	loop?: IShapeLoopGenerator<PA>
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeLoopSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends IShapeLoopProps<PA>,
		IShapePrimitiveSettings<PA, D> {
	/**
	 * Array of properties on which shapeloop generation depends,
	 * for example the circle varies the number of points based on the radius (sideLength)
	 * @order -30
	 */
	loopDependencies?: Array<'propArguments' | keyof IShapeLoopProps<PA> | string>
}

//////

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IPolygonProps<PA extends IPropArguments = IPropArguments> extends IShapeLoopProps<PA> {
	/**
	 * sideNumber / segments
	 * @order -35
	 */
	sideNumber?: TSceneChildProp<number, PA>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IPolygonSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends IPolygonProps<PA>,
		IShapeLoopSettings<PA, D> {}

/**
 * For <mark>n</mark> and <mark>d</mark> see Rose on <a target="_blank" href="https://en.wikipedia.org/wiki/Rose_(mathematics)">Wikipedia</a>
 *
 * @category Core.Primitive Interfaces
 */
export interface IRoseProps<PA extends IPropArguments = IPropArguments> extends IShapeLoopProps<PA> {
	/**
	 * n coefficient
	 * @order -31
	 */
	n?: TSceneChildProp<number, PA>

	/**
	 * d coefficient
	 * @order -30
	 */
	d?: TSceneChildProp<number, PA>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IRoseSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends IRoseProps<PA>,
		IShapeLoopSettings<PA, D> {}

/**
 *
 * @category Core.Types
 */
export type TSpiralType = 'ARCHIMEDE' | 'HYPERBOLIC' | 'FERMAT' | 'LITUUS' | 'LOGARITHMIC'

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralProps<PA extends IPropArguments = IPropArguments> extends IShapeLoopProps<PA> {
	/**
	 * type of spiral
	 * @order -35
	 */
	spiral?: TSpiralType

	/**
	 * number of twists
	 * @order -34
	 */
	twists?: TSceneChildProp<number, PA>

	/**
	 * twist start
	 * @order -33
	 */
	twistsStart?: TSceneChildProp<number, PA>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ISpiralProps<PA>,
		IShapeLoopSettings<PA, D> {}

/**
 * For <mark>wx</mark>, <mark>wy</mark> and <mark>wx</mark> see Lissajous on <a target="_blank" href="https://en.wikipedia.org/wiki/Lissajous_curve">Wikipedia</a>
 * @category Core.Primitive Interfaces
 */
export interface ILissajousProps<PA extends IPropArguments = IPropArguments> extends IShapeLoopProps<PA> {
	/**
	 * wx coefficient
	 * @order -37
	 */
	wx?: TSceneChildProp<number, PA>

	/**
	 * wy coefficient
	 * @order -36
	 */
	wy?: TSceneChildProp<number, PA>

	/**
	 * wz coefficient
	 * @order -35
	 */
	wz?: TSceneChildProp<number, PA>
}

/**
 * http://paulbourke.net/geometry/supershape/
 *
 * @category Core.Primitive Interfaces
 */
export interface ILissajousSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ILissajousProps<PA>,
		IShapeLoopSettings<PA, D> {}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISuperShapeProps<PA extends IPropArguments = IPropArguments> extends IShapeLoopProps<PA> {
	/**
	 * a coefficient
	 * @order -35
	 */
	a?: TSceneChildProp<number, PA>

	/**
	 * b coefficient
	 * @order -34
	 */
	b?: TSceneChildProp<number, PA>

	/**
	 * m coefficient
	 * @order -33
	 */
	m?: TSceneChildProp<number, PA>

	/**
	 * n1 coefficient
	 * @order -32
	 */
	n1?: TSceneChildProp<number, PA>

	/**
	 * n2 coefficient
	 * @order -31
	 */
	n2?: TSceneChildProp<number, PA>

	/**
	 * n3 coefficient
	 * @order -30
	 */
	n3?: TSceneChildProp<number, PA>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISuperShapeSettings<
	PA extends IPropArguments = IPropArguments,
	D extends IDrawerProps<PA> = IDrawerProps<PA>
> extends ISuperShapeProps<PA>,
		IShapeLoopSettings<PA, D> {}
