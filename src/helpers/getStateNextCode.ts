import BefungeCodeParsed from '../types/BefungeCodeParsed';
import BefungeCodeRaw from '../types/BefungeCodeRaw';
import State from '../types/State';
import getFromCodeAtPosition from './getFromCodeAtPosition';

export default (
	code: BefungeCodeParsed,
	codeRaw: BefungeCodeRaw,
	state: State,
) => {
	const currentFunction = getFromCodeAtPosition( code, state.posX, state.posY );
	return currentFunction( state, codeRaw );
};
