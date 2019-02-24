import BefungeCodeParsed from './BefungeCodeParsed';
import Move from './Move';

interface State {
	code: BefungeCodeParsed;
	posX: number;
	posY: number;
	move: Move;
	isDone: boolean;
}

export default State;
