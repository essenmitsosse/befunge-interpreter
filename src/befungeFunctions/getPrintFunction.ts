import BefungeFunction from '../types/BefungeFunction';
import StackValue from '../types/StackValue';

export default ( input: StackValue ): BefungeFunction => ( { stack } ) => ( {
	newStack: [ ...stack, input ],
} );
