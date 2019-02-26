import BefungeFunction from '../types/BefungeFunction';
import getFromCodeAtPosition from '../helpers/getFromCodeAtPosition';

const functionModeChar: BefungeFunction = ( state ) => {
	const currentFunction = getFromCodeAtPosition( state.codeFuncs, state.posX, state.posY );
	return currentFunction( state );
};

export default functionModeChar;
