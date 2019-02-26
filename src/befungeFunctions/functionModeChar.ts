import BefungeFunction from '../types/BefungeFunction';
import getFromCodeAtPosition from '../helpers/getFromCodeAtPosition';

const functionModeChar: BefungeFunction = ( {
	stack, codeChars, posX, posY,
} ) => {
	const character = getFromCodeAtPosition( codeChars, posX, posY );
	return character === '"'
		? { isStringMode: false }
		: { stack: [ ...stack, character.charCodeAt( 0 ) ] };
};

export default functionModeChar;
