import BefungeCode from '../types/BefungeCode';
import stateBase from './stateBase';
import State from '../types/State';

export default ( code: BefungeCode ): State => ( {
	...stateBase,
	code,
} );
