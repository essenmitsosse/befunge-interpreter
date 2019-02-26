import Move from './Move';
import Stack from './Stack';
import BefungeCodeParsed from './BefungeCodeParsed';
import BefungeCodeRaw from './BefungeCodeRaw';

interface State {
	posX: number;
	posY: number;
	move: Move;
	stack: Stack,
	skipNext: boolean;
	isStringMode: boolean;
	codeParsed: BefungeCodeParsed;
	codeRaw: BefungeCodeRaw;
}

export default State;
