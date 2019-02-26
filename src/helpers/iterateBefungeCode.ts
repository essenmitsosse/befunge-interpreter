import State from '../types/State';
import getStateNext from './getStateNext';
import StateChange from '../types/StateChange';
import updateStateWithStateChange from './updateStateWithStateChange';

export default function* iterateBefungeCode(
	stateInput: State,
) {
	let stateCurrent = stateInput;

	while ( true ) {
		const stateChange: StateChange = getStateNext( stateCurrent );
		if ( stateChange.output ) { yield stateChange.output; }
		if ( stateChange.isDone ) { break; }
		stateCurrent = updateStateWithStateChange( stateCurrent, stateChange );
	}
}
