import BefungeCodeParsed from '../types/BefungeCodeParsed';
import stateBase from './stateBase';
import State from '../types/State';

export default ( code: BefungeCodeParsed ): State => ( {
	...stateBase,
	code,
} );
