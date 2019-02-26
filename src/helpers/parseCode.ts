import BefungeCodeChars from '../types/BefungeCodeChars';
import BefungeCodeFuncs from '../types/BefungeCodeFuncs';
import parseCharacter from './parseCharacter';

const parseLine = ( codeLine: string[] ) => codeLine.map( parseCharacter );
export default ( codeChars: BefungeCodeChars ): BefungeCodeFuncs => codeChars.map( parseLine );
