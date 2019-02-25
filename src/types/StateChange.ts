import Move from './Move';
import Stack from './Stack';

export interface StateChange {
	move?: Move;
	isDone?: boolean;
	output?: string;
	newStack?: Stack;
	startStringMode?: boolean;
}

export default StateChange;
