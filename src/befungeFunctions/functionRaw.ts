import BefungeFunction from '../types/BefungeFunction';
import functionModeFunc from './functionModeFunc';
import functionModeChar from './functionModeChar';
import functionSkip from './functionSkip';

const getStateNext: BefungeFunction = ( state ) => {
	if ( state.skipNext ) {
		return functionSkip( state );
	} if ( state.isStringMode ) {
		return functionModeChar( state );
	}
	return functionModeFunc( state );
};

export default getStateNext;
