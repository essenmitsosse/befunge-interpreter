import Stack from '../types/Stack';
import getLastStackValue from './getLastStackValue';

export default ( stack: Stack ): {
	newStack: Stack,
	popped: number
} => {
	const newStack = stack.slice( 0, -1 );
	const popped = getLastStackValue( stack );

	return {
		newStack,
		popped,
	};
};
