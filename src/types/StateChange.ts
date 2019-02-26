import Move from './Move';
import Stack from './Stack';

export interface StateChange {
	move?: Move;
	isDone?: boolean;
	output?: string;
	stack?: Stack;
	isStringMode?: boolean;
	skipNext?: boolean;
}

export default StateChange;
