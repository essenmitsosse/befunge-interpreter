import Move from './Move';
import Stack from './Stack';
import BefungeCodeFuncs from './BefungeCodeFuncs';
import BefungeCodeChars from './BefungeCodeChars';

interface State {
	posX: number;
	posY: number;
	move: Move;
	stack: Stack,
	skipNext: boolean;
	isStringMode: boolean;
	codeFuncs: BefungeCodeFuncs;
	codeChars: BefungeCodeChars;
}

export default State;
