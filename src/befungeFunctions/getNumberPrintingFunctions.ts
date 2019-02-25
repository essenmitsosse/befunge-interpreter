import BefungeFunction from '../types/BefungeFunction';
import getPrintFunction from './getPrintFunction';

const getNumberPrintingFunctions: {
	[key: string]: BefungeFunction;
} = new Array( 10 )
	.fill( null )
	.reduce(
		( map, _, index ) => ( {
			...map,
			[ index ]: getPrintFunction( index ),
		} ),
		{},
	);

export default getNumberPrintingFunctions;
