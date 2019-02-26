import match from './match';

test( 'Matches 1st condition, returns transform', () => {
	const after = match( 'a' )
		.on( value => value === 'a', value => `${ value }0` )
		.on( () => false, value => `${ value }1` )
		.otherwise( value => `${ value }2` );

	expect( after ).toEqual( 'a0' );
} );

test( 'Matches 2nd condition, returns transform', () => {
	const after = match( 'a' )
		.on( () => false, value => `${ value }0` )
		.on( value => value === 'a', value => `${ value }1` )
		.otherwise( value => `${ value }2` );

	expect( after ).toEqual( 'a1' );
} );


test( 'Matches no condition, returns otherwise', () => {
	const after = match( 'a' )
		.on( () => false, value => `${ value }0` )
		.on( () => false, value => `${ value }1` )
		.otherwise( value => `${ value }2` );

	expect( after ).toEqual( 'a2' );
} );
