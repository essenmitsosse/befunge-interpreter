import BefungeCodeRaw from '../types/BefungeCodeRaw';

export default ( input: string | string[] ): BefungeCodeRaw => (
	typeof input === 'string'
		? input.split( '\n' )
		: input
);
