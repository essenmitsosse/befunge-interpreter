import convertInputToBefungeCode from './helpers/convertInputToBefungeCode';
import iterateBefungeCode from './helpers/iterateBefungeCode';
import stateBase from './helpers/stateBase';
import parseCode from './helpers/parseCode';

export default ( input: string | string[] ) => {
	const codeChars = convertInputToBefungeCode( input );
	const codeFuncs = parseCode( codeChars );
	const stateInitial = {
		...stateBase,
		codeChars,
		codeFuncs,
	};
	const list = [ ...iterateBefungeCode( stateInitial ) ];
	return list.join( '' );
};
