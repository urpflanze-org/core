abstract class Modifier {
	abstract apply(buffer: Float32Array, bClosed: boolean): Float32Array
}

export { Modifier }
