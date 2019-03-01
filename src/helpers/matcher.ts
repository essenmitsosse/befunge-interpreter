type Condition<I> = ( input: I ) => any
type Transform<I, O> = ( input: I ) => O;
type Context<I, O> = ( input: I, transform: Transform<I, O> ) => O;
type Otherwise<I, O> = Transform<Transform<I, O>, Transform<I, O>>

type Pipeline<I, O> = {
	on: On<I, O>;
	otherwise: Otherwise<I, O>;
}

type On<I, O> = ( condition: Condition<I>, transform: Transform<I, O> ) => Pipeline<I, O>

const applyCondition = <I, O>(
	condition: Condition<I>,
	ifTrue: Transform<I, O>,
	ifFalse: Transform<I, O>,
): Transform<I, O> =>
		input => ( condition( input )
			? ifTrue( input )
			: ifFalse( input ) );

// We need to disabled this rule to allow for circular dependencies.
/* eslint-disable no-use-before-define */
const getPipeline = <I, O>( context: Context<I, O> ): Pipeline<I, O> => ( {
	on: getContextOn<I, O>( context ),
	otherwise: otherwiseContext<I, O>( context ),
} );
/* eslint-enable no-use-before-define */

const otherwiseContext =
	<I, O>( contextBefore: Context<I, O> ): Otherwise<I, O> =>
		transform =>
			input =>
				contextBefore( input, transform );

const getContextOn =
	<I, O>( contextBefore: Context<I, O> ): On<I, O> =>
		( condition, transform ) =>
			getPipeline( ( input, transformNext ) =>
				contextBefore(
					input,
					applyCondition( condition, transform, transformNext ),
				) );

const unitContext = <I, O>( input: I, transformNext: Transform<I, O> ) =>
	transformNext( input );

const getUnitFunction =
	<I, O, Result, Arg>(
		args: Arg[],
		getContext: ( context: Context<I, O> ) => ( ...args: Arg[] ) => Result,
	) => getContext( unitContext )( ...args );

export const on =
	<I, O, R extends Pipeline<I, O>>(
		condition: Condition<I>,
		transform: Transform<I, O>,
	): R =>
		getUnitFunction<I, O, R, Condition<I> | Transform<I, O>>( [ transform, condition ], getContextOn );

export const otherwise =
	<I, O>( transform: Transform<I, O> ) =>
		otherwiseContext<I, O>( unitContext )( transform );

const matcher = { on, otherwise };

export default matcher;
