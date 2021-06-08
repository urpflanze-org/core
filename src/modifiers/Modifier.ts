import { ShapePrimitive } from '../shapes/ShapePrimitive'

abstract class Modifier {
	abstract apply(buffer: Float32Array, bClosed: boolean, shape: ShapePrimitive<any>): Float32Array
}

export { Modifier }
