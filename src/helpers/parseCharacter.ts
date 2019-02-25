import BefungeFunction from '../types/BefungeFunction';
import befungeFunctions from '../befungeFunctions';

export default ( character: string ): BefungeFunction => (
	befungeFunctions[ character ]
	|| (
		( state ) => {
			throw new Error( `
PARSING ERROR\n
unknown character encountered: '${ character }',
current state:                 ${ JSON.stringify( state ) }
`			);
		}
	)
);
