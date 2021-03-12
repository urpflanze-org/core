<img height="60" src="https://raw.githubusercontent.com/urpflanze-org/core/master/docs/assets/images/logo-for-github.svg">

## Menu

- [Menu](#menu)
- [Sinossi](#sinossi)
- [Motivazioni](#motivazioni)
- [Donate](#donate)
- [Installazione](#installazione)
- [Creazione di una forma](#creazione-di-una-forma)
  - [ShapeBuffer](#shapebuffer)
  - [ShapeLoop](#shapeloop)
- [Forme primitive](#forme-primitive) - [ShapeBuffer](#shapebuffer-1) - [ShapeLoop](#shapeloop-1)
- [Ripetizioni](#ripetizioni)
  - [Ripetizioni circolari](#ripetizioni-circolari)
  - [Ripetizioni a matrice](#ripetizioni-a-matrice)
- [Gestire le ripetizioni](#gestire-le-ripetizioni)
  - [Esempi](#esempi)
  - [Lista di tutte le proprietà](#lista-di-tutte-le-proprietà)
- [Incapsulamento](#incapsulamento)
  - [Shape](#shape)
  - [Group](#group)
  - [Usare le ripetizioni di chi incapsula](#usare-le-ripetizioni-di-chi-incapsula)
- [Ricorsione](#ricorsione)
- [La Scena](#la-scena)

---

## Sinossi

Questo pacchetto è il **core** utilizzato dalla libreria javascript [Urpflanze](https://github.com/urpflanze-org/urpflanze) per la generazione della scena.
Si occupa di creare forme bidimensionali, ripeterle, manipolarle punto per punto ed incapsularle.
Puoi utilizzarlo nel browser o in node.

## Motivazioni

La creazione di questa libreria nasce dall'esigenze di creare delle API semplici per
gestire le ripetizione di forme primitive e la possibilità di applicare trasformazioni ad ognuna di esse, applicando trasformazioni sui punti evitando di usare le trasformazioni di canvas.

Un'altra esigenza - che poi è diventata una delle feature principali - era quella di poter incapsulare il risultato di una generazione e gestirla come se fosse una nuova forma.

## Donate

Sto cercando di creare uno strumento per chi vuole avvicinarsi al mondo della programmazione
o per i programmatori che vogliono avvicinarsi al mondo del coding creativo.

Ho dedicato molto tempo e ne dedicherò altro per supportare questo progetto.
Ho in mente anche un [editor](https://github.com/urpflanze-org/editor) web (open-source) dove si potranno utilizzare le features di questa libreria nel browser. [Puoi vedere qui un'anteprima](https://editor.urpflanze.org)

[![](https://img.shields.io/badge/donate-paypal-003087.svg?logo=paypal)](https://www.paypal.me/genbs)
[![](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?logo=ko-fi)](https://ko-fi.com/urpflanze)

[![](https://img.shields.io/badge/bitcoin-1CSQq4aMmsA71twvyZHZCjmeB2AmQGCPNq-f7931a.svg?logo=bitcoin)](https://explorer.btc.com/btc/address/1CSQq4aMmsA71twvyZHZCjmeB2AmQGCPNq)
[![](https://img.shields.io/badge/ethereum-0x9086c4bb7015c1d6dc79162d02e7e1239c982c01-ecf0f1.svg?logo=ethereum)](https://etherscan.io/address/0x9086c4bb7015c1d6dc79162d02e7e1239c982c01)

---

## Installazione

Puoi installare la libreria con il comando

```bash
npm i @urpflanze/core --save
```

Al termine è possibile importare Urpflanze nel tuo progetto

```javascript
/**
 * Full importing
 */
import * as Urpflanze from '@urpflanze/core'

const scene = new Urpflanze.Scene()

/**
 * Selective import
 */
import { Scene } from '@urpflanze/core'

const scene = new Scene()
```

---

## Creazione di una forma

### ShapeBuffer

La _ShapeBuffer_ è la forma a cui puoi passare un buffer di punti.
Essa accetta la proprietà `shape` che è un array di punti [x0, y0, x1, y1, ..., xn, yn].
L'Array di punti verrà adattato tra un range di -1 ed 1.

Example:

```javascript
import { ShapeBuffer } from '@urpflanze/core'

const rect = new ShapeBuffer({
	shape: [-1, -1, 1, -1, 1, 1, -1, -1],
	sideLength: [10, 10],
})

rect.generate() // Apply properties

console.log(rect.getBuffer())

// Output:
// Float32Array(8) [
//   -10, -10,  10, -10,
//    10,  10, -10, -10
// ]
```

### ShapeLoop

La _ShapeLoop_ è una forma generata pertendo da un ciclo,
è consigliato restituire i valori tra un range di -1 ed 1

```javascript
import { ShapeLoop } from '@urpflanze/core'

const circle = new Urpflanze.ShapeLoop({
	sideLength: [10, 10],
	loop: {
		start: 0,
		end: Math.PI * 2,
		inc: (Math.PI * 2) / 100, // (end - start) / 100 for generate 100 points
		vertex: shapeLoopRepetition => [
			// shapeLoopRepetition.current start from 0 and end to 2 PI,
			// so you can use it as a angle
			Math.cos(shapeLoopRepetition.current),
			Math.sin(shapeLoopRepetition.current),
		],
	},
	bClosed: true, // flag to determinate the shape is closed
})

circle.generate()

console.log(circle.getBuffer().length)

// Output:
// 200 / 2 = 100 points
```

---

## Forme primitive

In questo pacchetto sono già presenti delle forme di base:

#### ShapeBuffer

[`Line`](https://docs.urpflanze.org/core/#/ref/Line)
[`Triangle`](https://docs.urpflanze.org/core/#/ref/Triangle)
[`Rect`](https://docs.urpflanze.org/core/#/ref/Rect)

#### ShapeLoop

[`Polygon`](https://docs.urpflanze.org/core/#/ref/Polygon)
[`Circle`](https://docs.urpflanze.org/core/#/ref/Circle)
[`Lissajous`](https://docs.urpflanze.org/core/#/ref/Lissajous)
[`Spiral`](https://docs.urpflanze.org/core/#/ref/Spiral)
[`Rose`](https://docs.urpflanze.org/core/#/ref/Rose)
[`SuperShape`](https://docs.urpflanze.org/core/#/ref/SuperShape)

---

## Ripetizioni

Con Urpflanze puoi ripetere le forme in modo **circolare** o a **matrice**.

### Ripetizioni circolari

Per questo tipo di ripetizioni puoi settare un valore numerico alla proprietà `repetitions` per indicare il numero di volte che dovrà ripetersi e la proprietà `distance` per indicare la distanza dal centro.

```javascript
new Urpflanze.Rect({
	repetitions: 8,
	distance: 100,
	sideLength: 25,
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/repetition-ring-1.png)

Di base le forme verranno ruotate verso il centro, se si vuol evitare quest'effetto bisogna ruotare la vorma inversemente all'angolo corrente della ripetizione.

```javascript
new Urpflanze.Rect({
	repetitions: 8,
	sideLength: 25,
	distance: 100,
	rotateZ: ({ repetition }) => -repetition.angle,
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/repetition-ring-2.png)

### Ripetizioni a matrice

Per ripetere la forma come una matrice basterà passare alla proprietà `repetitions` un Array di numeri che indicano il numero di righe e di colonne. Anche la proprietà `distance` in questo caso sarà un Array contenente la distanza tra le righe e le colonne.

```javascript
new Urpflanze.Rect({
	repetitions: [3, 4],
	sideLength: 20,
	distance: [80, 50],
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/repetition-matrix-1.png)

---

## Gestire le ripetizioni

Per gestire le ripetizioni possiamo passare alle proprietà una funzione al posto di una costante. Possiamo l'argomento della funzione che è di tipo [ISceneChildPropArguments](https://docs.urpflanze.org/urpflanze/#/ref/ISceneChildPropArguments).

Al suo interno troviamo la proprietà `repetition` che - come ogni oggetto che implementa una [IBaseRepetition](https://docs.urpflanze.org/urpflanze/#/ref/IBaseRepetition) - contiene le seguenti proprietà:

- `index` l'indice corrente, da 1 a count
- `count` il numero totale di ripetizioni
- `offset` un indice che va da 0 ad 1 che non dipende dal numero di ripetizioni. Ad esempio, se il numero di ripetizioni sono 3, il valore di offset sarà 0 - 0.5 - 1

Per le ripetizioni a matrice puoi utilizzare anche `repetition.row` e `repetition.col` anch'esse di tipo IBaseRepetition

### Esempi

```javascript
new Urpflanze.Rect({
	repetitions: 8,
	sideLength: 25,
	distance: ({ repetition }) => repetition.offset * 100,
	scale: ({ repetition }) => repetition.offset,
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/repetition-1.png)

```javascript
new Urpflanze.Rect({
	repetitions: [4],
	sideLength: 25,
	distance: 50,
	scale: ({ repetition }) => {
		// [0, 0] is center of repetition, you can set value between [-1, -1] (left - top angle) and [1, 1] (right - bottom angle)
		return Urpflanze.distanceFromRepetition(repetition, [0, 0]),
	}
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/repetition-2.png)

### [Lista di tutte le proprietà](https://docs.urpflanze.org/core/#/ref/IShapeBaseSettings)

---

## Incapsulamento

Per poter incapsulare una forma puoi utilizzare la classe `Shape` a cui puoi passare la proprietà
`shape` che è una `ShapePrimitive` (ShapeBuffer o ShapeLoop) o un `Group`.

### Shape

```javascript
const lines = new Urpflanze.Line({
	repetitions: 20,
	sideLength: 25,
	distance: 50,
})

const container = new Urpflanze.Shape({
	shape: lines,

	repetitions: [3], // [3, 3]
	distance: 100,
	scale: 0.5, // scale all repetitions of lines
})

const final = new Urpflanze.Shape({
	shape: container,

	repetitions: 6,
	distance: 120,
	scale: 0.4,
	perspective: 0.99,
	rotateY: Urpflanze.toRadians(60),
})
```

|                                     lines                                     |                                   container                                   |                                     final                                     |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| ![](https://docs.urpflanze.org/core/assets/images/readme/encapsulation-1.png) | ![](https://docs.urpflanze.org/core/assets/images/readme/encapsulation-2.png) | ![](https://docs.urpflanze.org/core/assets/images/readme/encapsulation-3.png) |

### Group

```javascript
const group = new Urpflanze.Group({
	repetitions: 4,
	sideLength: 15,
	distance: 25,
	rotateZ: Urpflanze.toRadians(45),
})

group.add(
	new Urpflanze.Circle(),
	new Urpflanze.Rect(),
	new Urpflanze.Line({
		rotateZ: 0,
	})
)

const shape = new Urpflanze.Shape({
	shape: group,
	repetitions: 8,
	distance: 100,
	rotateZ: ({ repetition }) => -repetition.angle,
})
```

|                                 group                                 |                                 shape                                 |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![](https://docs.urpflanze.org/core/assets/images/readme/group-1.png) | ![](https://docs.urpflanze.org/core/assets/images/readme/group-2.png) |

### Usare le ripetizioni di chi incapsula

Puoi utilizzare l'oggetto `repetition` di chi incapsula una forma settando la proprietà `bUseParent`.
Questo parametro è opzionale poiché verrà generatoro un nuovo buffer di punti ad ogni ripetizione di chi incapsula.

```javascript
const rect = new Urpflanze.Rect({
	bUseParent: true, // <--

	repetitions: [5],
	sideLength: 10,
	distance: 20,
	scale: ({ repetition, parent }) => {
		return repetition.offset * parent.repetition.offset
	},
})

const container = new Urpflanze.Shape({
	shape: rect,
	repetitions: [5],
	distance: 50,
	scale: 0.4,
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/parent-rep-1.png)

---

## Ricorsione

Un'altra possibilità è utilizzare la `ShapeRecursive` per ripetere qualsiasi `Shape` su ogni suo punto.

Puoi utilizzare la proprietà `recursion` di tipo [IRecursionRepetition](https://docs.urpflanze.org/core/#/ref/IRecursionRepetition)

```javascript
const rect = new Urpflanze.Rect({
	// bUseRecursion: true,
	// [prop]: ({ recursion }) => ...
	sideLength: 50,
})

const container = new Urpflanze.ShapeRecursive({
	shape: rect,
	recursionScale: 2,
	recursions: 4,
})
```

![](https://docs.urpflanze.org/core/assets/images/readme/recursion-1.png)

---

## La Scena

Puoi utilizzare le forme in modo indipendente oppure puoi aggiungerle ad una scene.
Quando una forma viene aggiunta alla scene verraà disposta al centro di essa, aggiungendo un offset a tutti i punti.

_Utilizzo senza la scena:_

```javascript
const rect = new Urpflanze.Rect({ sideLength: 25 })
rect.generate()
console.log(rect.getBounding())

// Output:
//
// { cx: 0, cy: 0, x: -25, y: -25, width: 50, height: 50 }
// # left, top point: (-25, -25) | right, bottom point: (25, 25)
```

_Aggiunta alla scena:_

```javascript
const scene = new Urpflanze.Scene({ width: 100, height: 100 })
const rect = new Urpflanze.Rect({ sideLength: 25 })
scene.add(rect)
scene.update()
console.log(rect.getBounding())

// Output:
//
// {
//	cx: 50, cy: 50, 	  # Center of scene
//	x: 25, y: 25,  		  # Center of scene - sideLength
//	width: 50, height: 50 # sideLength * 2
// }
// # left, top point: (25, 25) | right, bottom point: (75, 75)
```
