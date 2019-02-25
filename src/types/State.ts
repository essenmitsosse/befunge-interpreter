import Move from './Move';
import Stack from './Stack';

interface State {
	posX: number;
	posY: number;
	move: Move;
	stack: Stack,
	skipNext?: boolean;
}

export default State;
