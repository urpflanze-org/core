import { IPropArguments, ISceneChildProps, ISceneChildSettings, IStreamArguments } from './types/scene-child'
import { IShapeBounding } from './types/shape-base'
import { IBufferIndex } from './types/indexedBuffer'

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
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
abstract class SceneChild<PA extends IPropArguments = IPropArguments> {
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
	 * @type {ISceneChildProps}
	 */
	protected props: ISceneChildProps<PA>

	/**
	 * Custom client data
	 *
	 * @type {*}
	 */
	public data: any

	/**
	 * Creates an instance of SceneChild.
	 * Base values will be assigned in case they are not passed
	 *
	 * @param {ISceneChildSettings} settings
	 */
	constructor(settings: ISceneChildSettings<PA>) {
		this.id = settings.id ?? ++__id

		this.type = settings.type || 'SceneChild'
		this.name = settings.name || this.type + '_' + this.id
		this.data = settings.data || {}

		this.props = {}
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
	find(idOrName: string | number): SceneChild<PA> | null {
		if (this.id === idOrName || this.name === idOrName) return this

		return null
	}

	/**
	 * Return the sceneChild properties
	 *
	 * @returns {ISceneChildProps<PA>}
	 */
	public getProps(): ISceneChildProps<PA> {
		return this.props
	}

	/**
	 * Return a sceneChild prop or default value
	 *
	 * @param {keyof ISceneChildProps<PA>} key
	 * @param {PA} [propArguments]
	 * @param {*} [defaultValue]
	 * @returns {*}
	 */
	public getProp(key: keyof ISceneChildProps<PA>, propArguments?: PA, defaultValue?: any): any {
		return (this.props[key] ?? defaultValue) as any
	}

	/**
	 * Set a single or multiple props and clear buffer if shape vertex depends from prop
	 *
	 * @abstract
	 * @template K
	 * @param {(K | ISceneChildProps<PA>)} key
	 * @param {ISceneChildProps<PA>[K]} [value]
	 * @param {boolean} [bClearIndexed]
	 */
	abstract setProp<K extends keyof ISceneChildProps<PA>>(
		key: K | ISceneChildProps<PA>,
		value?: ISceneChildProps<PA>[K],
		bClearIndexed?: boolean
	): void

	/**
	 * Set a single or multiple props
	 *
	 * @param {(keyof ISceneChildProps<PA> | ISceneChildProps<PA>)} key
	 * @param {*} [value]
	 */
	public setPropUnsafe(key: keyof ISceneChildProps<PA> | ISceneChildProps<PA>, value?: any): void {
		if (typeof key == 'string') this.props[key] = value
		else
			Object.keys(key).forEach(
				(k: string) =>
					(this.props[k as keyof ISceneChildProps<PA>] = (key as ISceneChildProps<PA>)[
						k as keyof ISceneChildProps<PA>
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
	 * @param {PA} parentPropArguments
	 */
	abstract generate(generateId: number, bDirectSceneChild: boolean, parentPropArguments?: PA): void

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
	abstract getBufferLength(propArguments?: PA): number

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
