import BefungeCodeChars from '../types/BefungeCodeChars';

export default ( input: string | string[] ): BefungeCodeChars => (
	typeof input === 'string'
		? input.split( '\n' )
		: input
).map( line => line.split( '' ) );
