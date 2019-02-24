import Move from './Move';
import Stack from './Stack';

export interface StateChange {
	move?: Move;
	isDone?: true;
	output?: string;
	newStack?: Stack;
}

export default StateChange;
