/**
 * Repetition type enumerator.
 *
 * @category Core.Repetition
 * @internal
 */
export enum ERepetitionType {
	/**
	 * Defines the type of repetition of the shape,
	 * in a circular way starting from the center of the scene
	 * @order 1
	 */
	Ring = 1,

	/**
	 * Defines the type of repetition of the shape,
	 * on a nxm grid starting from the center of the scene
	 * @order 2
	 */
	Matrix = 2,
}

/**
 * Base repetition
 *
 * @category Core.Repetition
 */
export interface IBaseRepetition {
	/**
	 * Index of repetition, from 1 to count
	 * @order 1
	 */
	index: number

	/**
	 * Current repetition offset from 0 (first repetition) to 1 (last repetition)
	 * @order 2
	 */
	offset: number

	/**
	 * Number of repetitions
	 * @order 3
	 */
	count: number
}

/**
 *
 *
 * @category Core.Repetition
 */
export interface IShapeLoopRepetition extends IBaseRepetition {
	/**
	 * current tick value
	 *
	 * @order 4
	 */
	current: number
}

/**
 * Information about propArguments repetition
 *
 * @category Core.Repetition
 */
export interface IRepetition extends IBaseRepetition {
	/**
	 * Define the type of repetition
	 * @order 4
	 */
	angle: number

	/**
	 * Define the type of repetition
	 * @order 5
	 */
	type: ERepetitionType

	/**
	 * Information about rows of matrix repetition
	 * @order 6
	 */
	row: IBaseRepetition

	/**
	 * Information about columns of matrix repetition
	 * @order 7
	 */
	col: IBaseRepetition
}

/**
 *
 *
 * @category Core.Repetition
 */
export interface IRecursionRepetition extends IBaseRepetition {
	/**
	 * Level (depth) of recursion
	 * @order 4
	 */
	level: IBaseRepetition

	/**
	 * parent recursion
	 *
	 * @order 5
	 */
	parent?: IRecursionRepetition
}
