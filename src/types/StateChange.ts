import Move from './Move';

export interface StateChange {
	move?: Move;
	isDone?: true;
	output?: string;
}

export default StateChange;
