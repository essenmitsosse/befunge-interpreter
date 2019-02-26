import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import BefungeCodeRaw from '../types/BefungeCodeRaw';
import StateChange from '../types/StateChange';
import getStateNextCode from './getStateNextCode';
import getStateNextString from './getStateNextString';

export default (
	code: BefungeCodeParsed,
	codeRaw: BefungeCodeRaw,
	state: State,
): StateChange => {
	if ( state.skipNext ) {
		return {};
	} if ( state.isStringMode ) {
		return getStateNextString( codeRaw, state );
	}
	return getStateNextCode( code, codeRaw, state );
};
