import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import getCurrentFunction from './getCurrentFunction';

export default ( code: BefungeCodeParsed, state: State ): {
	state: State,
	isDone: boolean,
	output?: string,
} => {
	const getCurrentStateChange = getCurrentFunction( code, state );
	const stateChange = getCurrentStateChange( state );

	const move = stateChange.move ? stateChange.move : state.move;
	const stack = stateChange.newStack || state.stack;
	const posX = move.x ? state.posX + move.x : state.posX;
	const posY = move.y ? state.posY + move.y : state.posY;
	const isDone = !!stateChange.isDone;

	return {
		state: {
			stack, move, posX, posY,
		},
		isDone,
		output: stateChange.output,
	};
};
