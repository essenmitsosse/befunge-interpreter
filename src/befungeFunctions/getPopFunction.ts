import StateChange from '../types/StateChange';
import BefungeFunction from '../types/BefungeFunction';
import StackValue from '../types/StackValue';
import popStack from './popStack';

export default (
	callback: ( pop1: StackValue ) => StateChange,
): BefungeFunction => (
	( { stack } ) => {
		const { newStack, popped } = popStack( stack );
		return {
			newStack: [ ...newStack ],
			...callback( popped ),
		};
	}
);
