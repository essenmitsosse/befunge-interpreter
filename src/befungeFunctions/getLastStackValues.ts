import Stack from '../types/Stack';
import StackValue from '../types/StackValue';

export default ( stack: Stack, amount = 1 ): StackValue[] => (
	stack.length === 0
		? [ 0 ]
		: stack.slice( -1 * amount )
);
