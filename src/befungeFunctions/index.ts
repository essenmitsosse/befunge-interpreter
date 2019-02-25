import BefungeFunction from '../types/BefungeFunction';
import pushNumberFunctions from './pushNumberFunctions';
import popStack from './popStack';
import getLastStackValue from './getLastStackValue';

const befungeFunctions: { [ key: string ]: BefungeFunction } = {
	...pushNumberFunctions,

	/* eslint-disable quote-props */
	' ': () => ( {} ),
	'>': () => ( { move: { x: 1 } } ),
	'<': () => ( { move: { x: -1 } } ),
	'^': () => ( { move: { y: -1 } } ),
	'v': () => ( { move: { y: 1 } } ),
	'default': () => ( { isDone: true } ),
	'.': ( { stack } ) => {
		const { newStack, popped } = popStack( stack );
		return {
			newStack,
			output: popped.toString(),
		};
	},
	':': ( { stack } ) => ( {
		newStack: [ ...stack, getLastStackValue( stack ) ],
	} ),
	'_': ( { stack } ) => {
		const { newStack, popped } = popStack( stack );
		return {
			newStack,
			move: {
				x: popped === 0 ? 1 : -1,
			},
		};
	},
	'?': () => ( {
		move: { [ Math.random() > 0.5 ? 'x' : 'y' ]: Math.random() > 0.5 ? -1 : 1 },
	} ),
};

export default befungeFunctions;
