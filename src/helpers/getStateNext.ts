import State from '../types/State';
import getCurrentCharacter from './getCurrentCharacter';

export default ( state: State ): {
	state: State,
	output?: string,
} => {
	const currentCharacter = getCurrentCharacter( state );

	return {
		state: {
			...state,
			posX: state.posX + 1,
			isDone: state.posX > 5,
		},
		output: currentCharacter,
	};
};
