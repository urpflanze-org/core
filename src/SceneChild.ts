import {
	ISceneChildProps,
	ISceneChildSettings,
	IStreamArguments,
	IBufferIndex,
	IPropArguments,
	IShapeBounding,
} from './types'

import { Scene } from './Scene'

/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
let __id = 0

/**
 * The element to be added into a scene.
 * Preserve props, drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Scene
 * @order 2
 * @class SceneChild
 */
abstract class SceneChild<
	PropArguments extends IPropArguments = IPropArguments,
	Props extends ISceneChildProps<PropArguments> = ISceneChildProps
> {
	/**
	 * Reference of the scene to which it is attached
	 *
	 * @type {Scene}
	 */
	public scene?: Scene

	/**
	 * The unique id
	 *
	 * @type {number | string}
	 */
	public id: number | string

	/**
	 * The human readable name
	 *
	 * @type {string}
	 */
	public name: string

	/**
	 * The human readable type label
	 *
	 * @type {string}
	 */
	public type: string

	/**
	 * The number that refers to the drawinf order
	 *
	 * @type {number}
	 */
	public order?: number

	/**
	 * The basic properties
	 *
	 * @protected
	 * @type {Props}
	 */
	protected props: Props

	/**
	 * Custom client data
	 *
	 * @type {*}
	 */
	public data: any

	/**
	 * Shape generation id
	 * used for prevent buffer calculation
	 *
	 * @internal
	 * @ignore
	 */
	public generateId = -1

	/**
	 * Creates an instance of SceneChild.
	 * Base values will be assigned in case they are not passed
	 *
	 * @param {ISceneChildSettings} settings
	 */
	constructor(settings: ISceneChildSettings<PropArguments>) {
		this.id = settings.id ?? ++__id

		this.type = settings.type || 'SceneChild'
		this.name = settings.name || this.type + '_' + this.id
		this.data = settings.data || {}

		this.props = {} as Props
	}

	/**
	 * With this method it is possible to check if the buffer will be generated at each update
	 *
	 * @abstract
	 * @returns {boolean}
	 */
	public abstract isStatic(): boolean

	/**
	 * With this method you can check if the streaming buffer will be generated at each update
	 *
	 * @abstract
	 * @returns {boolean}
	 */
	public abstract isStaticIndexed(): boolean

	/**
	 * Find this or form or children.
	 * Overridden by classes that extend it
	 *
	 * @param {string | number} idOrName
	 * @returns {(SceneChild | null)}
	 */
	find(idOrName: string | number): SceneChild<any, any> | null {
		if (this.id === idOrName || this.name === idOrName) return this

		return null
	}

	/**
	 * Return the sceneChild properties
	 *
	 * @returns {Props}
	 */
	public getProps(): Props {
		return this.props
	}

	/**
	 * Return a sceneChild prop or default value
	 *
	 * @param {keyof Props} key
	 * @param {PropArguments} [propArguments]
	 * @param {*} [defaultValue]
	 * @returns {*}
	 */
	public getProp(key: keyof Props, propArguments?: PropArguments, defaultValue?: any): any {
		return (this.props[key] ?? defaultValue) as any
	}

	/**
	 * Check SceneChild has prop
	 *
	 * @param {keyof Props} key
	 * @returns
	 */
	public hasProp(key: keyof Props): boolean {
		return typeof this.props[key] !== 'undefined'
	}

	/**
	 * Set a single or multiple props and clear buffer if shape vertex depends from prop
	 *
	 * @abstract
	 * @template Props
	 * @param {(Props | Partial<Props>)} key
	 * @param {ISceneChildProps<PropArguments>[Props]} [value]
	 * @param {boolean} [bClearIndexed]
	 */
	abstract setProp<T extends keyof Props>(key: T | Partial<Props>, value?: Props[T], bClearIndexed?: boolean): void

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ISceneChildProps<PropArguments> | ISceneChildProps<PropArguments>)} key
	 * @param {*} [value]
	 */
	public setPropUnsafe(
		key: keyof ISceneChildProps<PropArguments> | ISceneChildProps<PropArguments>,
		value?: any
	): void {
		if (typeof key == 'string') this.props[key] = value
		else
			Object.keys(key).forEach(
				(k: string) =>
					(this.props[k as keyof ISceneChildProps<PropArguments>] = (key as ISceneChildProps<PropArguments>)[
						k as keyof ISceneChildProps<PropArguments>
					] as any)
			)
	}

	/**
	 * Generate shape.
	 * Best explained in <a href="[base_url]/ShapeBase">ShapeBase</a>
	 *
	 * @abstract
	 * @param {number} generateId
	 * @param {boolean} bDirectSceneChild
	 * @param {PropArguments} parentPropArguments
	 */
	abstract generate(generateId: number, bDirectSceneChild: boolean, parentPropArguments?: IPropArguments): void

	/**
	 * Get buffer bounding
	 *
	 * @abstract
	 * @returns {IShapeBounding }
	 */
	abstract getBounding(): IShapeBounding

	/**
	 * Stream shape
	 * Best explained in ShapeBase
	 *
	 * @abstract
	 * @param {(streamArguments: IStreamArguments) => void} callback
	 */
	abstract stream(callback: (streamArguments: IStreamArguments) => void): void

	/**
	 * Return buffer of vertext if is generated
	 *
	 * @returns {(Float32Array | undefined)}
	 */
	public abstract getBuffer(): Float32Array | undefined

	/**
	 * Return indexed buffer
	 *
	 * @returns {(Array<IBufferIndex> | undefined)}
	 */
	public abstract getIndexedBuffer(): Array<IBufferIndex> | undefined

	/**
	 * Get length of buffer
	 *
	 * @abstract
	 * @param {IPropArguments | undefined} [propArguments]
	 * @returns {number}
	 */
	abstract getBufferLength(propArguments?: PropArguments): number

	/**
	 * Clear buffer
	 *
	 * @abstract
	 * @param {boolean} [bClearIndexed]
	 * @param {boolean} [bPropagateToParents]
	 */
	abstract clearBuffer(bClearIndexed: boolean, bPropagateToParents: boolean): void
}

export { SceneChild }
