import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import getStateNext from './getStateNext';

export default function* iterateBefungeCode( codeParsed: BefungeCodeParsed, stateInput: State ) {
	let stateCurrent = stateInput;
	let isDone = false;

	while ( !isDone ) {
		const result = getStateNext( codeParsed, stateCurrent );
		/* eslint-disable prefer-destructuring */
		isDone = result.isDone;
		stateCurrent = result.state;

		if ( result.output ) { yield result.output; }
	}
}
