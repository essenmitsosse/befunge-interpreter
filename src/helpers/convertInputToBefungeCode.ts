import BefungeCode from '../types/BefungeCode';

export default ( input: string | string[] ): BefungeCode => ( typeof input === 'string'
	? input.split( '\n' )
	: input );
