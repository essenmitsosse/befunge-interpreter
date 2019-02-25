import BefungeFunction from '../types/BefungeFunction';
import befungeFunctions from '../befungeFunctions';

export default ( character: string ): BefungeFunction => (
	befungeFunctions[ character ]
	|| (
		() => { throw new Error( `Unknown character encountered: '${ character }'` ); }
	)
);
