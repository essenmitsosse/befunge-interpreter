import BefungeFunction from '../types/BefungeFunction';
import pushNumberFunctions from './pushNumberFunctions';
import getLastStackValue from './getLastStackValue';
import getPopTwiceOutputFunction from './getPopTwiceOutputFunction';
import getPopFunction from './getPopFunction';

const befungeFunctions: { [ key: string ]: BefungeFunction } = {
	...pushNumberFunctions,

	/* eslint-disable quote-props */
	' ': () => ( {} ),
	'>': () => ( { move: { x: 1 } } ),
	'<': () => ( { move: { x: -1 } } ),
	'^': () => ( { move: { y: -1 } } ),
	'v': () => ( { move: { y: 1 } } ),
	'.': getPopFunction( popped => ( { output: popped.toString() } ) ),
	'_': getPopFunction( popped => ( { move: { x: popped === 0 ? 1 : -1 } } ) ),
	'+': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop1 + pop2 ),
	'-': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop2 - pop1 ),
	'*': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop1 * pop2 ),
	'/': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop2 / pop1 ),
	':': ( { stack } ) => ( { newStack: [ ...stack, getLastStackValue( stack ) ] } ),
	'?': () => ( {
		move: { [ Math.random() > 0.5 ? 'x' : 'y' ]: Math.random() > 0.5 ? -1 : 1 },
	} ),
	'default': () => ( { isDone: true } ),
};

export default befungeFunctions;
