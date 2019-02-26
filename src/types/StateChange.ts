import Move from './Move';
import Stack from './Stack';
import BefungeCodeChars from './BefungeCodeChars';
import BefungeCodeFuncs from './BefungeCodeFuncs';

export interface StateChange {
	move?: Move;
	isDone?: boolean;
	output?: string;
	stack?: Stack;
	isStringMode?: boolean;
	skipNext?: boolean;
	codeChars?: BefungeCodeChars;
	codeFuncs?: BefungeCodeFuncs;
}

export default StateChange;
