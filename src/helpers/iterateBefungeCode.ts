import State from '../types/State';
import getStateNext from './getStateNext';

export default function* iterateBefungeCode( stateInput: State ) {
	let stateCurrent = stateInput;

	while ( !stateCurrent.isDone ) {
		const { state, output } = getStateNext( stateCurrent );
		stateCurrent = state;

		if ( output ) { yield output; }
	}
}
