import State from '../types/State';
import StateChange from '../types/StateChange';

export default ( state: State, stateChange: StateChange ): State => {
	const move = stateChange.move || state.move;

	return {
		move,
		stack: stateChange.stack || state.stack,
		codeParsed: stateChange.codeParsed || state.codeParsed,
		codeRaw: stateChange.codeRaw || state.codeRaw,
		posX: state.posX + ( move.x || 0 ),
		posY: state.posY + ( move.y || 0 ),
		skipNext: !!stateChange.skipNext,
		isStringMode: stateChange.isStringMode === undefined
			? state.isStringMode
			: stateChange.isStringMode,
	};
};
