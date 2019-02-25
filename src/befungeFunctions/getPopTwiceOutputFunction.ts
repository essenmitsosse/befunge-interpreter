import StackValue from '../types/StackValue';
import BefungeFunction from '../types/BefungeFunction';
import popStackTwice from './popStackTwice';

export default (
	callback: ( pop1: StackValue, pop2: StackValue ) => StackValue,
): BefungeFunction => (
	( { stack } ) => {
		const { newStack, popped1, popped2 } = popStackTwice( stack );
		return {
			newStack: [ ...newStack, callback( popped1, popped2 ) ],
		};
	}
);
