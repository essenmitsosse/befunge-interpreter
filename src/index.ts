import convertInputToBefungeCode from './helpers/convertInputToBefungeCode';
import iterateBefungeCode from './helpers/iterateBefungeCode';
import stateBase from './helpers/stateBase';
import parseCode from './helpers/parseCode';

export default ( input: string | string[] ) => {
	const codeRaw = convertInputToBefungeCode( input );
	const codeParsed = parseCode( codeRaw );
	const list = [ ...iterateBefungeCode( codeParsed, stateBase ) ];
	return list.join( '' );
};
