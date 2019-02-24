import befunge from './index';

test( 'Example Programm with single line input', () => {
	expect( befunge( '>987v>.v\nv456<  :\n>321 ^ _@' ) ).toEqual( '123456789' );
} );

test( 'Example Programm with string Array input', () => {
	expect( befunge( [
		'>987v>.v',
		'v456<  :',
		'>321 ^ _@',
	] ) ).toEqual( '123456789' );
} );

test.skip( 'Hello World', () => {
	expect( befunge( [
		'>25*"!dlroW olleH":v',
		'                v:,_@',
		'                >  ^',
	] ) ).toEqual( 'Hello World!\n' );
} );

test.skip( 'Factorial (8! = 40320)', () => {
	expect( befunge( [
		'08>:1-:v v *_$.@ ',
		'  ^    _$>\\:^',
	] ) ).toEqual( '40320' );
} );

test.skip( 'Quine', () => {
	expect( befunge( '01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@' ) ).toEqual( '01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@' );
} );

test.skip( ' Sieve of Eratosthenes', () => {
	expect( befunge( [
		'2>:3g" "-!v\\  g30          <',
		' |!`"&":+1_:.:03p>03g+:"&"`|',
		' @               ^  p3\\" ":<',
		'2 2345678901234567890123456789012345678',
	] ) ).toEqual( '23571113171923293137' );
} );

test.skip( 'Random direction', () => {
	let amountOf1s = 0;
	let i = 0;

	const runBefungeeRandom = () => befunge( [
		'v@.<',
		' >1^',
		'>?<^',
		' >2^',
	] );

	while ( i < 200 ) {
		if ( runBefungeeRandom() === '1' ) {
			amountOf1s += 1;
		}

		i += 1;
	}

	expect( amountOf1s ).toBeGreaterThanOrEqual( 200 * 0.45 );
	expect( amountOf1s ).toBeLessThanOrEqual( 200 * 0.55 );
} );
