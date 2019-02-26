const otherwiseContext = < Input, Result >(
	contextBefore: (
		input: Input,
		transform: ( input: Input ) => Result
	) => Result,
) => (
		transform: ( input: Input ) => Result,
	) => ( input: Input ) => contextBefore( input, transform );

const onContext = < Input, Result >(
	contextBefore: (
		input: Input,
		transform: ( input: Input ) => Result
	) => Result,
) => (
		condition: ( input: Input ) => any,
		transform: ( input: Input ) => Result,
	) => {
		const contextOut = (
			input: Input,
			transformNext: ( input: Input ) => Result,
		) => contextBefore(
			input,
			( inputOut: Input ) => (
				condition( inputOut )
					? transform( inputOut )
					: transformNext( inputOut )
			),
		);

		return {
			on: onContext( contextOut ),
			otherwise: otherwiseContext( contextOut ),
		};
	};

const onDirect = < Input, Result >(
	condition: ( input: Input ) => any,
	transform: ( input: Input ) => Result,
) => onContext( (
		input: Input,
		transformNext: ( input: Input ) => Result,
	) => ( transformNext( input ) ) )( condition, transform );

const otherwiseDirect = < Input, Result >( transform: ( input: Input ) => Result ) => transform;

const matcher = { on: onDirect, otherwise: otherwiseDirect };

const match = matcher
	.on( () => true, ( value: number ) => '!' )
	.otherwise( ( value: number ) => `${ value }!` );

export const result = match( 222 );

export default matcher;
