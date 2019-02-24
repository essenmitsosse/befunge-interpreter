import BefungeFunction from '../types/BefungeFunction';
import getPrintFunction from './getPrintFunction';
import StackValue from '../types/StackValue';

const getNumberPrintingFunctions: {
	[key: string]: BefungeFunction;
} = new Array( 10 )
	.fill( null )
	.reduce(
		( map, _, index ) => ( {
			...map,
			[ index ]: getPrintFunction( index as StackValue ),
		} ),
		{},
	);

export default getNumberPrintingFunctions;
