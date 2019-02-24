import BefungeFunction from '../types/BefungeFunction';

const getPrintFunction = ( input: number ): BefungeFunction => ( { stack } ) => ( {
	newStack: [ ...stack, input ],
} );

const numberPrintingFunctions: { [ key: string ]: BefungeFunction } = new Array( 10 )
	.fill( null )
	.reduce( ( map, _, index ) => ( { ...map, [ index ]: getPrintFunction( index ) } ), {} );

const befungeFunctions: { [ key: string ]: BefungeFunction } = {
	...numberPrintingFunctions,

	/* eslint-disable quote-props */
	' ': () => ( {} ),
	'>': () => ( { move: { x: 1 } } ),
	'<': () => ( { move: { x: -1 } } ),
	'^': () => ( { move: { y: -1 } } ),
	'v': () => ( { move: { y: 1 } } ),
	'default': () => ( { isDone: true } ),
};

export default befungeFunctions;
