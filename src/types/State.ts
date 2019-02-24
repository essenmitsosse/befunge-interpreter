import BefungeCodeParsed from './BefungeCodeParsed';
import Move from './Move';
import Stack from './Stack';

interface State {
	code: BefungeCodeParsed;
	posX: number;
	posY: number;
	move: Move;
	stack: Stack,
	isDone: boolean;
}

export default State;
