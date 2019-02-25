import BefungeFunction from '../types/BefungeFunction';
import getPrintFunction from './getPrintFunction';

const pushNumberFunctions: {
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

export default pushNumberFunctions;
