import State from '../types/State';
import BefungeCodeRaw from '../types/BefungeCodeRaw';
import getCodePosition from './getCodePosition';

export default ( code: BefungeCodeRaw, state: State ): {
	state: State,
	isDone: boolean,
	inStringMode: boolean,
	output?: string,
} => {
	const currentCharacter = getCodePosition( code, state );
	const posX = state.posX + ( state.move.x || 0 );
	const posY = state.posY + ( state.move.y || 0 );
	const inStringMode = currentCharacter !== '"';
	const stack = inStringMode ? [ ...state.stack, currentCharacter.charCodeAt( 0 ) ] : state.stack;

	return {
		state: {
			...state, stack, posX, posY,
		},
		isDone: false,
		inStringMode,
	};
};
