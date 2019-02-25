import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import BefungeCodeRaw from '../types/BefungeCodeRaw';
import StateChange from '../types/StateChange';
import currentCharacter from './getCodePosition';

export default ( code: BefungeCodeParsed, codeRaw: BefungeCodeRaw, state: State ): {
	state: State,
	isDone: boolean,
	inStringMode: boolean,
	output?: string,
} => {
	const getCurrentStateChange = currentCharacter( code, state );
	const stateChange: StateChange = state.skipNext
		? {}
		: getCurrentStateChange( state, codeRaw );

	const move = stateChange.move ? stateChange.move : state.move;
	const stack = stateChange.newStack || state.stack;
	const posX = move.x ? state.posX + move.x : state.posX;
	const posY = move.y ? state.posY + move.y : state.posY;
	const isDone = !!stateChange.isDone;
	const inStringMode = !!stateChange.startStringMode;
	const skipNext = !!stateChange.skipNext;

	return {
		state: {
			stack, move, posX, posY, skipNext,
		},
		isDone,
		inStringMode,
		output: stateChange.output,
	};
};
