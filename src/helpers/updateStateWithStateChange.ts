import State from '../types/State';
import StateChange from '../types/StateChange';

export default ( state: State, stateChange: StateChange ) => {
	const move = stateChange.move || state.move;

	return {
		move,
		posX: state.posX + ( move.x || 0 ),
		posY: state.posY + ( move.y || 0 ),
		skipNext: !!stateChange.skipNext,
		stack: stateChange.stack || state.stack,
		isStringMode: stateChange.isStringMode === undefined
			? state.isStringMode
			: stateChange.isStringMode,
	};
};
