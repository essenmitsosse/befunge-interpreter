import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import BefungeCodeRaw from '../types/BefungeCodeRaw';
import getStateNext from './getStateNext';
import StateChange from '../types/StateChange';
import updateStateWithStateChange from './updateStateWithStateChange';

export default function* iterateBefungeCode(
	codeRaw: BefungeCodeRaw,
	codeParsed: BefungeCodeParsed,
	stateInput: State,
) {
	let stateCurrent = stateInput;

	while ( true ) {
		const stateChange: StateChange = getStateNext( codeParsed, codeRaw, stateCurrent );
		if ( stateChange.output ) { yield stateChange.output; }
		if ( stateChange.isDone ) { break; }
		stateCurrent = updateStateWithStateChange( stateCurrent, stateChange );
	}
}
