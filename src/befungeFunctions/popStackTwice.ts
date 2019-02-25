import Stack from '../types/Stack';
import getLastStackValues from './getLastStackValues';
import StackValue from '../types/StackValue';

export default ( stack: Stack ): {
	newStack: Stack,
	poppedFirst: StackValue,
	poppedSecond: StackValue,
} => {
	const newStack = stack.slice( 0, -1 );
	const [ poppedSecond, poppedFirst ] = getLastStackValues( stack, 2 );

	return {
		newStack,
		poppedFirst,
		poppedSecond,
	};
};
