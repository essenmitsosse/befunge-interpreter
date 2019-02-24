import Stack from '../types/Stack';
import getLastStackValue from './getLastStackValue';
import StackValue from '../types/StackValue';

export default ( stack: Stack ): {
	newStack: Stack,
	popped: StackValue
} => {
	const newStack = stack.slice( 0, -1 );
	const popped = getLastStackValue( stack );

	return {
		newStack,
		popped,
	};
};
