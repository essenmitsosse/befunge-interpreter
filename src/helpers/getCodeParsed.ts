import BefungeCodeRaw from '../types/BefungeCodeRaw';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import BefungeFunction from '../types/BefungeFunction';
import State from '../types/State';

const parseCharacter = ( character: string ): BefungeFunction => ( state: State ) => (
	state.posX > 3
		? {
			isDone: true,
		}
		: { output: String.fromCharCode( 97 + state.posX ), moveX: 1 }
);

const parseLine = ( codeLine: string ) => codeLine
	.split( '' )
	.map( parseCharacter );

export default ( codeRaw: BefungeCodeRaw ): BefungeCodeParsed => codeRaw.map( parseLine );
