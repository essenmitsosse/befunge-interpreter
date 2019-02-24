import State from '../types/State';
import getCurrentFunction from './getCurrentFunction';

export default ( state: State ): {
	state: State,
	output?: string,
} => {
	const getCurrentStateChange = getCurrentFunction( state );
	const stateChange = getCurrentStateChange( state );

	const {
		isDone, output,
	} = stateChange;

	const move = stateChange.move ? stateChange.move : state.move;

	return {
		state: {
			...state,
			move,
			posX: move.x ? state.posX + move.x : state.posX,
			posY: move.y ? state.posY + move.y : state.posY,
			isDone: !!isDone,
		},
		output,
	};
};
