import convertInputToBefungeCode from './helpers/convertInputToBefungeCode';
import iterateBefungeCode from './helpers/iterateBefungeCode';
import getStateBase from './helpers/getStateBase';

export default ( input: string | string[] ) => {
	const code = convertInputToBefungeCode( input );
	const stateBase = getStateBase( code );
	const list = [ ...iterateBefungeCode( stateBase ) ];
	return list.join( ',' );
};
