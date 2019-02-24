import convertInputToBefungeCode from './helpers/convertInputToBefungeCode';
import iterateBefungeCode from './helpers/iterateBefungeCode';
import getStateBase from './helpers/getStateBase';
import parseCode from './helpers/parseCode';

export default ( input: string | string[] ) => {
	const codeRaw = convertInputToBefungeCode( input );
	const codeParsed = parseCode( codeRaw );
	const stateBase = getStateBase( codeParsed );
	const list = [ ...iterateBefungeCode( stateBase ) ];
	return list.join( ',' );
};
