import befungeFunctions from './index';
import State from '../types/State';
import StateChange from '../types/StateChange';
import BefungeCodeRaw from '../types/BefungeCodeRaw';

const {
	/* eslint-disable quote-props */
	' ': SPACE,
	'>': RIGHT,
	'<': LEFT,
	'^': UP,
	'v': DOWN,
	'$': POP_AND_DISCARD,
	'.': POP_AND_OUTPUT,
	'_': CHECK_HORIZONTAL,
	'|': CHECK_VERTICAL,
	',': TO_STRING,
	'+': PLUS,
	'-': MINUS,
	'*': MULTIPLY,
	'/': DEVIDE,
	':': DUPLICATE,
	'!': NOT,
	'\\': SWAP,
	'?': RANDOM_MOVE,
	'#': TRAMPOLINE,
	'g': GET,
	'@': END,
	'"': STRING_MODE,
	/* eslint-enable quote-props */
} = befungeFunctions;

const stateEmpty: State = {
	move: {},
	posX: 0,
	posY: 0,
	stack: [],
	isStringMode: false,
	skipNext: false,
	codeParsed: [],
	codeRaw: [],
};

const code: BefungeCodeRaw = [];

const stateNotEmpty: State = {
	...stateEmpty,
	stack: [ 0, 1, 2, 3 ], // No Magic numbers, tests expect those values!
};

describe( '\' \' SPACE', () => {
	test( 'empty state change', () => {
		expect( SPACE( stateEmpty ) )
			.toEqual( {} as StateChange );
	} );
} );

describe( '\'>\' RIGHT', () => {
	test( 'change move to right', () => {
		expect( RIGHT( stateEmpty ) )
			.toEqual( { move: { x: 1 } } as StateChange );
	} );
} );

describe( '\'<\' LEFT', () => {
	test( 'change move to left', () => {
		expect( LEFT( stateEmpty ) )
			.toEqual( { move: { x: -1 } } as StateChange );
	} );
} );

describe( '\'^\' UP', () => {
	test( 'change move to up', () => {
		expect( UP( stateEmpty ) )
			.toEqual( { move: { y: -1 } } as StateChange );
	} );
} );

describe( '\'v\' DOWN', () => {
	test( 'change move to down', () => {
		expect( DOWN( stateEmpty ) )
			.toEqual( { move: { y: 1 } } as StateChange );
	} );
} );

describe( '\'$\' POP_AND_DISCARD', () => {
	test( 'Outputs 0 on empty stack', () => {
		expect( POP_AND_DISCARD( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 2 ] } as StateChange );
	} );
} );

describe( '\'.\' POP_AND_OUTPUT', () => {
	test( 'Outputs 0 on empty stack', () => {
		expect( POP_AND_OUTPUT( stateEmpty ) )
			.toEqual( { stack: [], output: '0' } as StateChange );
	} );

	test( 'Pops and outputs last value from stack', () => {
		expect( POP_AND_OUTPUT( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 2 ], output: '3' } as StateChange );
	} );
} );

describe( '\'_\' CHECK_HORIZONTAL', () => {
	test( 'Goes right if last value is 0', () => {
		expect( CHECK_HORIZONTAL( stateEmpty ) )
			.toEqual( { stack: [], move: { x: 1 } } as StateChange );
	} );

	test( 'Goes left if last value is not 0', () => {
		expect( CHECK_HORIZONTAL( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 2 ], move: { x: -1 } } as StateChange );
	} );
} );

describe( '\'|\' CHECK_VERTICAL', () => {
	test( 'Goes right if last value is 0', () => {
		expect( CHECK_VERTICAL( stateEmpty ) )
			.toEqual( { stack: [], move: { y: 1 } } as StateChange );
	} );

	test( 'Goes left if last value is not 0', () => {
		expect( CHECK_VERTICAL( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 2 ], move: { y: -1 } } as StateChange );
	} );
} );

describe( '\',\' TO_STRING', () => {
	test( 'Outputs the ASCII character represented by the popped integer', () => {
		const state: State = {
			...stateEmpty,
			stack: [ 0, 1, 2, 97 /* ASCI Char code for "a" */ ],
		};

		expect( TO_STRING( state ) )
			.toEqual( { output: 'a', stack: [ 0, 1, 2 ] } as StateChange );
	} );
} );

describe( '\'+\' PLUS', () => {
	test( 'Pops last two values and pushes sum to stack', () => {
		expect( PLUS( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 5 ] } as StateChange );
	} );
} );

describe( '\'-\' MINUS', () => {
	test( 'Pops last two values and pushes difference to stack', () => {
		expect( MINUS( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, -1 ] } as StateChange );
	} );
} );

describe( '\'*\' MULTIPLY', () => {
	test( 'Pops last two values and pushes product to stack', () => {
		expect( MULTIPLY( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 6 ] } as StateChange );
	} );
} );

describe( '\'/\' DEVIDE', () => {
	test( 'Pops last two values and pushes dividend to stack', () => {
		expect( DEVIDE( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 2 / 3 ] } as StateChange );
	} );
} );

describe( '\':\' DUPLICATE', () => {
	test( 'Duplicates the last value on the stack', () => {
		expect( DUPLICATE( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 2, 3, 3 ] } as StateChange );
	} );
} );

describe( '\'$\' NOT', () => {
	test( 'Pushes 1 if value popped value is 0', () => {
		expect( NOT(
			{ ...stateEmpty, stack: [ 0 ] },
		) ).toEqual( { stack: [ 1 ] } as StateChange );
	} );

	test( 'Pushes 0 if value popped value is not 0', () => {
		expect( NOT(
			{ ...stateEmpty, stack: [ 1 ] },
		) ).toEqual( { stack: [ 0 ] } as StateChange );
	} );
} );

describe( '\'$\' SWAP', () => {
	test( 'Swaps last two values on stack', () => {
		expect( SWAP( stateNotEmpty ) )
			.toEqual( { stack: [ 0, 1, 3, 2 ] } as StateChange );
	} );
} );

describe( '\'?\' RANDOM MOVE', () => {
	test( 'Returns a random move', () => {
		let moveEast = 0;
		let moveWest = 0;
		let moveSouth = 0;
		let moveNorth = 0;

		let i = 1000;

		const expected = i * 0.25;
		const expectedMin = expected * 0.25;
		const expectedMax = expected * 2;

		while ( i ) {
			const { move: { x, y } } = RANDOM_MOVE( stateNotEmpty );
			if ( x === 1 ) { moveEast += 1; }
			if ( x === -1 ) { moveWest += 1; }
			if ( y === 1 ) { moveSouth += 1; }
			if ( y === -1 ) { moveNorth += 1; }
			i -= 1;
		}

		expect( moveEast ).toBeGreaterThan( expectedMin );
		expect( moveEast ).toBeLessThanOrEqual( expectedMax );
		expect( moveWest ).toBeGreaterThan( expectedMin );
		expect( moveWest ).toBeLessThanOrEqual( expectedMax );
		expect( moveSouth ).toBeGreaterThan( expectedMin );
		expect( moveSouth ).toBeLessThanOrEqual( expectedMax );
		expect( moveNorth ).toBeGreaterThan( expectedMin );
		expect( moveNorth ).toBeLessThanOrEqual( expectedMax );
	} );
} );


describe( '\'#\' TRAMPOLINE', () => {
	test( 'Skips next cell', () => {
		expect( TRAMPOLINE( stateNotEmpty ) )
			.toEqual( { skipNext: true } as StateChange );
	} );
} );

describe( '\'"\' STRING_MODE', () => {
	test( 'Ends the programm', () => {
		expect( STRING_MODE( stateNotEmpty ) )
			.toEqual( { isStringMode: true } as StateChange );
	} );
} );

describe( '\'@\' GET', () => {
	test( 'Gets value from code at position of the last two stack values and pushes ASCII value', () => {
		expect( GET(
			{
				...stateEmpty,
				stack: [ 0, 1 ],
				codeRaw: [
					[ 'a', 'b' ],
					[ 'c', 'd' ],
				],
			},
		) ).toEqual( { stack: [ 99 /* Charcode for c at 0, 1 */ ] } as StateChange );
	} );
} );

describe( '\'@\' END', () => {
	test( 'Ends the programm', () => {
		expect( END( stateNotEmpty ) )
			.toEqual( { isDone: true } as StateChange );
	} );
} );
