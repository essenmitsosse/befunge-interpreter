import State from '../types/State';
import getCurrentFunction from './getCurrentFunction';

export default ( state: State ): {
	state: State,
	output?: string,
} => {
	const currentFunction = getCurrentFunction( state );
	const {
		moveX, moveY, isDone, output,
	} = currentFunction( state );

	return {
		state: {
			...state,
			posX: moveX ? state.posX + moveX : state.posX,
			posY: moveY ? state.posY + moveY : state.posY,
			isDone: !!isDone,
		},
		output,
	};
};
