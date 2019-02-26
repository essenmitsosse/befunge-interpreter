import State from '../types/State';

const stateBase: State = {
	posX: 0,
	posY: 0,
	move: { x: 1 },
	stack: [],
	isStringMode: false,
	skipNext: false,
};

export default stateBase;
