import { ShapePrimitive } from '../shapes/ShapePrimitive'

/**
 * Manipulate a buffer after generating
 *
 * @abstract
 * @category Modifiers
 * @class Modifier
 */
abstract class Modifier {
	abstract apply(buffer: Float32Array, bClosed: boolean, shape: ShapePrimitive<any, any, any>): Float32Array
}

export { Modifier }
