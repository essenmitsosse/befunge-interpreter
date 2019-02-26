import matcher from './matcher';

test( 'Has only default', () => {
	const match = matcher
		.otherwise( value => `${ value }0` );

	expect( match( 'a' ) ).toEqual( 'a0' );
} );

test( 'Doesnt matches the other condition, returns default', () => {
	const match = matcher
		.on( () => false, value => `${ value }0` )
		.otherwise( value => `${ value }1` );

	expect( match( 'a' ) ).toEqual( 'a1' );
} );

test( 'Matches first condition, with one condition', () => {
	const match = matcher
		.on( () => true, value => `${ value }0` )
		.otherwise( value => `${ value }1` );

	expect( match( 'a' ) ).toEqual( 'a0' );
} );

test( 'Matches 1st condition, with multiple conditions', () => {
	const match = matcher
		.on( value => value === 'a', value => `${ value }0` )
		.on( () => false, value => `${ value }1` )
		.otherwise( value => `${ value }2` );

	expect( match( 'a' ) ).toEqual( 'a0' );
} );

test( 'Matches 2nd condition, with multiple conditions', () => {
	const match = matcher
		.on( () => false, value => `${ value }0` )
		.on( value => value === 'a', value => `${ value }1` )
		.otherwise( value => `${ value }2` );

	expect( match( 'a' ) ).toEqual( 'a1' );
} );

test( 'Matches no condition, returns otherwise', () => {
	const match = matcher
		.on( () => false, value => `${ value }0` )
		.on( () => false, value => `${ value }1` )
		.otherwise( value => `${ value }2` );

	expect( match( 'a' ) ).toEqual( 'a2' );
} );

test( 'Very long condition #1', () => {
	const match = matcher
		.on( value => value !== 'a', value => `${ value }0` )
		.on( value => value !== 'a', value => `${ value }1` )
		.on( value => value !== 'a', value => `${ value }2` )
		.on( value => value !== 'a', value => `${ value }3` )
		.on( value => value !== 'a', value => `${ value }4` )
		.on( value => value !== 'a', value => `${ value }5` )
		.on( value => value === 'a', value => `${ value }6` )
		.on( value => value !== 'a', value => `${ value }7` )
		.on( value => value !== 'a', value => `${ value }8` )
		.otherwise( value => `${ value }9` );

	expect( match( 'a' ) ).toEqual( 'a6' );
} );

test( 'Very long condition #2', () => {
	const isNotB = value => value !== 'b';

	const match = matcher
		.on( isNotB, value => `${ value }0` )
		.on( isNotB, value => `${ value }1` )
		.on( isNotB, value => `${ value }2` )
		.on( isNotB, value => `${ value }3` )
		.on( isNotB, value => `${ value }4` )
		.on( isNotB, value => `${ value }5` )
		.on( isNotB, value => `${ value }6` )
		.on( isNotB, value => `${ value }7` )
		.on( isNotB, value => `${ value }8` )
		.otherwise( value => `${ value }9` );

	expect( match( 'b' ) ).toEqual( 'b9' );
} );
