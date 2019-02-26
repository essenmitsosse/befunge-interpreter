export interface MatchResponse < Input, Result > {
	on: (
		condition: ( input: Input ) => any,
		transform: ( input: Input ) => Result,
	) => MatchResponse< Input, Result >,
	otherwise: ( transform: ( input: Input ) => Result ) => Result
}

export type Match = < Input, Result >( input: Input ) => MatchResponse< Input, Result >
export type Matched = < Input, Result >( input: Result ) => MatchResponse< Input, Result >

const matched: Matched = input => ( {
	on: () => matched( input ),
	otherwise: () => input,
} );

const match: Match = input => ( {
	on: ( condition, transform ) => ( condition( input )
		? matched( transform( input ) )
		: match( input ) ),
	otherwise: transform => transform( input ),
} );

export default match;
