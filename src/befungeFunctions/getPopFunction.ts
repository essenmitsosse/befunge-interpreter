import StateChange from '../types/StateChange';
import BefungeFunction from '../types/BefungeFunction';
import StackValue from '../types/StackValue';
import Stack from '../types/Stack';
import popStack from './popStack';

export default (
	callback: ( pop1: StackValue, newStack: Stack ) => StateChange,
): BefungeFunction => (
	( { stack } ) => {
		const { newStack, popped } = popStack( stack );
		return {
			stack: [ ...newStack ],
			...callback( popped, newStack ),
		};
	}
);
