import State from '../types/State';
import StateChange from '../types/StateChange';
import getFromCodeAtPosition from './getFromCodeAtPosition';

export default ( state: State ): StateChange => {
	const currentFunction = getFromCodeAtPosition( state.codeParsed, state.posX, state.posY );
	return currentFunction( state );
};
