import Stack from '../types/Stack';
import getLastStackValues from './getLastStackValues';
import StackValue from '../types/StackValue';

export default ( stack: Stack ): {
	newStack: Stack,
	popped1: StackValue,
	popped2: StackValue,
} => {
	const newStack = stack.slice( 0, -2 );
	const [ popped2, popped1 ] = getLastStackValues( stack, 2 );

	return {
		newStack,
		popped1,
		popped2,
	};
};
