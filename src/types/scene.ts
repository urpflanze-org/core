/**
 * The object to pass as the argument of a new scene
 *
 * @category Core.Interfaces
 */
export interface ISceneSettings {
	/**
	 * Scene width
	 * @order 1
	 */
	width?: number

	/**
	 * Scene height
	 * @order 2
	 */
	height?: number

	/**
	 * Set the center of the scene, default center
	 */
	anchor?: ['left' | 'right' | 'center' | number, 'top' | 'bottom' | 'center' | number]

	/**
	 * Default background color
	 * @order 3
	 */
	background?: string

	/**
	 * Default stroke color of shapes
	 * @order 4
	 */
	color?: string
}
