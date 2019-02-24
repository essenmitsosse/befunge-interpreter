import BefungeFunction from '../types/BefungeFunction';

export default ( input: number ): BefungeFunction => ( { stack } ) => ( {
	newStack: [ ...stack, input ],
} );
