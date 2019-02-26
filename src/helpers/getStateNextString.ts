import State from '../types/State';
import getFromCodeAtPosition from './getFromCodeAtPosition';
import StateChange from '../types/StateChange';

export default ( state: State ): StateChange => {
	const currentCharacter = getFromCodeAtPosition( state.codeRaw, state.posX, state.posY );

	const { move } = state;
	const isStringMode = currentCharacter !== '"';
	const newStack = isStringMode
		? [ ...state.stack, currentCharacter.charCodeAt( 0 ) ]
		: state.stack;

	return {
		move,
		isStringMode,
		stack: newStack,
	};
};
