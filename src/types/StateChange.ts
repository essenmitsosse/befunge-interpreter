import Move from './Move';
import Stack from './Stack';
import BefungeCodeRaw from './BefungeCodeRaw';
import BefungeCodeParsed from './BefungeCodeParsed';

export interface StateChange {
	move?: Move;
	isDone?: boolean;
	output?: string;
	stack?: Stack;
	isStringMode?: boolean;
	skipNext?: boolean;
	codeRaw?: BefungeCodeRaw;
	codeParsed?: BefungeCodeParsed;
}

export default StateChange;
