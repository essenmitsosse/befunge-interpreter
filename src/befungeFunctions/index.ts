import BefungeFunction from '../types/BefungeFunction';

const getPrintFunction = ( input: string | number ): BefungeFunction => {
	const string = input.toString();
	return () => ( { output: string } );
};

const numberPrintingFunctions: { [ key: string ]: BefungeFunction } = new Array( 10 )
	.fill( null )
	.reduce( ( map, _, index ) => ( { ...map, [ index ]: getPrintFunction( index ) } ), {} );

const befungeFunctions: { [ key: string ]: BefungeFunction } = {
	...numberPrintingFunctions,

	'>': () => ( { move: { x: 1 } } ),
	'<': () => ( { move: { x: -1 } } ),
	'^': () => ( { move: { y: -1 } } ),
	v: () => ( { move: { y: 1 } } ),
	default: () => ( { isDone: true } ),
};

export default befungeFunctions;
