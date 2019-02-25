import State from '../types/State';
import BefungeCodeParsed from '../types/BefungeCodeParsed';

export default (
	code: BefungeCodeParsed,
	{ posX, posY }: Pick<State, 'posX' | 'posY'>,
) => code[ posY ][ posX ];
