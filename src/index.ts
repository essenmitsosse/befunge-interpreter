import convertInputToBefungeCode from './helpers/convertInputToBefungeCode';
import iterateBefungeCode from './helpers/iterateBefungeCode';
import getStateBase from './helpers/getStateBase';
import getCodeParsed from './helpers/getCodeParsed';

export default ( input: string | string[] ) => {
	const codeRaw = convertInputToBefungeCode( input );
	const codeParsed = getCodeParsed( codeRaw );
	const stateBase = getStateBase( codeParsed );
	const list = [ ...iterateBefungeCode( stateBase ) ];
	return list.join( ',' );
};
