import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import BefungeCodeRaw from '../types/BefungeCodeRaw';
import getStateNext from './getStateNext';
import getStateNextStringMode from './getStateNextStringMode';

export default function* iterateBefungeCode(
	codeRaw: BefungeCodeRaw,
	codeParsed: BefungeCodeParsed,
	stateInput: State,
) {
	let stateCurrent = stateInput;
	let isDone = false;
	let inStringMode = false;

	while ( !isDone ) {
		const result: {
			state: State,
			isDone: boolean,
			inStringMode: boolean,
			output?: string
		} = inStringMode
			? getStateNextStringMode( codeRaw, stateCurrent )
			: getStateNext( codeParsed, stateCurrent );

		/* eslint-disable prefer-destructuring */
		isDone = result.isDone;
		stateCurrent = result.state;
		inStringMode = result.inStringMode;

		if ( result.output ) { yield result.output; }
	}
}
