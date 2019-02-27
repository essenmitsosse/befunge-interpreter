type Condition<I> = ( input: I ) => any
type Transform<I, O> = ( input: I ) => O;
type Context<I, O> = ( input: I, transform: Transform<I, O> ) => O;
type Otherwise<I, O> = Transform<Transform<I, O>, Transform<I, O>>

type Pipeline<I, O> = {
	on: On<I, O>;
	otherwise: Otherwise<I, O>;
}

type On<I, O> = ( condition: Condition<I>, transform: Transform<I, O> ) => Pipeline<I, O>
type OtherwiseContext = <I, O>( contextBefore: Context<I, O> ) => Otherwise<I, O>
type OnContext = <I, O>( contextBefore: Context<I, O> ) => On<I, O>

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
	on: onContext( context ),
	otherwise: otherwiseContext( context ),
} );
/* eslint-enable no-use-before-define */

const otherwiseContext: OtherwiseContext =
	contextBefore =>
		transform =>
			input =>
				contextBefore( input, transform );

const onContext: OnContext =
	contextBefore =>
		( condition, transform ) =>
			getPipeline( ( input, transformNext ) =>
				contextBefore(
					input,
					applyCondition( condition, transform, transformNext ),
				) );

export const on = <I, O>(
	condition: Condition<I>,
	transform: Transform<I, O>,
) => onContext<I, O>(
	( input, transformNext ) =>
		( transformNext( input ) ),
)( condition, transform );

export const otherwise = <I, O>( transform: Transform<I, O> ) => transform;

export default { on, otherwise };
