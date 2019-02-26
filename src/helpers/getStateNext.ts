import State from '../types/State';
import StateChange from '../types/StateChange';
import getStateNextCode from './getStateNextCode';
import getStateNextString from './getStateNextString';

export default (
	state: State,
): StateChange => {
	if ( state.skipNext ) {
		return {};
	} if ( state.isStringMode ) {
		return getStateNextString( state );
	}
	return getStateNextCode( state );
};
