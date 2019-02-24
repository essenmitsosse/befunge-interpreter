import State from '../types/State';
import getCurrentFunction from './getCurrentFunction';

export default ( state: State ): {
	state: State,
	output?: string,
} => {
	const getCurrentStateChange = getCurrentFunction( state );
	const stateChange = getCurrentStateChange( state );

	const move = stateChange.move ? stateChange.move : state.move;
	const stack = stateChange.newStack || state.stack;
	const posX = move.x ? state.posX + move.x : state.posX;
	const posY = move.y ? state.posY + move.y : state.posY;
	const isDone = !!stateChange.isDone;

	return {
		state: {
			...state, stack, move, posX, posY, isDone,
		},
		output: stateChange.output,
	};
};
