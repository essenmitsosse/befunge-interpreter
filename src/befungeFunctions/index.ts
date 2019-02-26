import BefungeFunction from '../types/BefungeFunction';
import pushNumberFunctions from './pushNumberFunctions';
import getLastStackValue from './getLastStackValue';
import getPopTwiceOutputFunction from './getPopTwiceOutputFunction';
import getPopFunction from './getPopFunction';
import popStackTwice from './popStackTwice';

const befungeFunctions: { [ key: string ]: BefungeFunction } = {
	...pushNumberFunctions,

	/* eslint-disable quote-props */
	' ': () => ( {} ),
	'>': () => ( { move: { x: 1 } } ),
	'<': () => ( { move: { x: -1 } } ),
	'^': () => ( { move: { y: -1 } } ),
	'v': () => ( { move: { y: 1 } } ),
	'$': getPopFunction( popped => ( {} ) ),
	'.': getPopFunction( popped => ( { output: popped.toString() } ) ),
	'_': getPopFunction( popped => ( { move: { x: popped === 0 ? 1 : -1 } } ) ),
	'|': getPopFunction( popped => ( { move: { y: popped === 0 ? 1 : -1 } } ) ),
	',': getPopFunction( popped => ( { output: String.fromCharCode( popped ) } ) ),
	'+': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop1 + pop2 ),
	'-': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop2 - pop1 ),
	'*': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop1 * pop2 ),
	'/': getPopTwiceOutputFunction( ( pop1, pop2 ) => pop2 / pop1 ),
	'\\': ( { stack } ) => {
		const { newStack, popped1, popped2 } = popStackTwice( stack );
		return {
			stack: [ ...newStack, popped1, popped2 ],
		};
	},
	'!': getPopFunction( ( popped, newStack ) => ( { stack: [ ...newStack, popped === 0 ? 1 : 0 ] } ) ),
	':': ( { stack } ) => ( { stack: [ ...stack, getLastStackValue( stack ) ] } ),
	'?': () => ( {
		move: { [ Math.random() > 0.5 ? 'x' : 'y' ]: Math.random() > 0.5 ? -1 : 1 },
	} ),
	'#': () => ( { skipNext: true } ),
	'"': () => ( { isStringMode: true } ),
	'g': ( { stack, codeChars } ) => {
		const { newStack, popped1, popped2 } = popStackTwice( stack );
		return {
			stack: [ ...newStack, codeChars[ popped1 ][ popped2 ].charCodeAt( 0 ) ],
		};
	},
	'@': () => ( { isDone: true } ),
};

export default befungeFunctions;
