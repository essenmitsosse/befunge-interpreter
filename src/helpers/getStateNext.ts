import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import currentCharacter from './getCodePosition';

export default ( code: BefungeCodeParsed, state: State ): {
	state: State,
	isDone: boolean,
	inStringMode: boolean,
	output?: string,
} => {
	const getCurrentStateChange = currentCharacter( code, state );
	const stateChange = getCurrentStateChange( state );

	const move = stateChange.move ? stateChange.move : state.move;
	const stack = stateChange.newStack || state.stack;
	const posX = move.x ? state.posX + move.x : state.posX;
	const posY = move.y ? state.posY + move.y : state.posY;
	const isDone = !!stateChange.isDone;
	const inStringMode = !!stateChange.startStringMode;

	return {
		state: {
			stack, move, posX, posY,
		},
		isDone,
		inStringMode,
		output: stateChange.output,
	};
};
