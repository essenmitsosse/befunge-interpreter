import State from '../types/State';

const stateBase: Pick<State, Exclude<keyof State, 'code'>> = {
	posX: 0,
	posY: 0,
	move: {},
	isDone: false,
};

export default stateBase;
