import BefungeFunction from '../types/BefungeFunction';
import Stack from '../types/Stack';

const getPrintFunction = ( input: number ): BefungeFunction => ( { stack } ) => ( {
	newStack: [ ...stack, input ],
} );

const numberPrintingFunctions: { [ key: string ]: BefungeFunction } = new Array( 10 )
	.fill( null )
	.reduce( ( map, _, index ) => ( { ...map, [ index ]: getPrintFunction( index ) } ), {} );

const getLastStackValue = ( stack: Stack ) => ( stack.length === 0 ? 0 : stack.slice( -1 )[ 0 ] );

const popStack = ( stack: Stack ) => {
	const newStack = stack.slice( 0, -1 );
	const popped = getLastStackValue( stack );

	return {
		newStack,
		popped,
	};
};

const befungeFunctions: { [ key: string ]: BefungeFunction } = {
	...numberPrintingFunctions,

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
};

export default befungeFunctions;
