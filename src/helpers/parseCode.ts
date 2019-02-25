import BefungeCodeRaw from '../types/BefungeCodeRaw';
import BefungeCodeParsed from '../types/BefungeCodeParsed';
import parseCharacter from './parseCharacter';

const parseLine = ( codeLine: string[] ) => codeLine.map( parseCharacter );
export default ( codeRaw: BefungeCodeRaw ): BefungeCodeParsed => codeRaw.map( parseLine );
