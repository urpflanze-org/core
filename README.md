<img height="60" src="https://raw.githubusercontent.com/urpflanze-org/core/master/docs/assets/images/logo-for-github.svg">

## Sinossi

Questo pacchetto è il core utilizzato dalla libreria javascript Urpflanze per la generazione della scena.

Si occupa di creare forme bidimensioni, ripeterle, manipolarle e incapsularle.

Puoi utilizzarlo nel browser o in node.

## Motivazioni

La creazione di questa libreria nasce dall'esigenze di creare delle API semplici per
gestire le ripetizione di forme primitive e la possibilità di applicare trasformazioni ad ognuna di esse.

Un'altra esigenza - che poi è diventata una delle feature principali - era quella di poter incapsulare il risultato di una generazione e gestirla come se fosse una nuova forma.

## Installazione

Puoi installare la libreria con il comando

```bash
npm i @urpflanze/core --save
```

Al termine è possibile importare Urpflanze nel codice

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

## Creazione di una forma

### ShapeBuffer

La _ShapeBuffer_ è la forma a cui puoi passare un buffer di punti.
Essa accetta la proprietà **shape** che è un array di punti [x0, y0, x1, y1, ..., xn, yn].
L'Array di punti verrà adattato tra un range di -1 ed 1.

Example:

```javascript
import { ShapeBuffer } from '@urpflanze/core'

const rect = new ShapeBuffer({
	shape: [-1, -1, 1, -1, 1, 1, -1, -1],
	sideLength: [10, 10],
})

rect.generate()

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

## Forme primitive

In questo pacchetto sono già presenti delle forme di base:

#### ShapeBuffer

- `Line`
- `Triangle`
- `Rect`

#### ShapeLoop

- [`Polygon`](#)
- `Circle`
- `Lissajous`
- `Spiral`
- `Rose`
- `SuperShape`

### Proprietà

## Ripetizioni

## Incapsulamento

## Ricorsione

## Aggiunta alla scena e Animazioni
