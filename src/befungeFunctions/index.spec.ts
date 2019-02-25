import befungeFunctions from './index';
import State from '../types/State';
import StateChange from '../types/StateChange';

const {
	/* eslint-disable quote-props */
	' ': SPACE,
	'>': RIGHT,
	'<': LEFT,
	'^': UP,
	'v': DOWN,
	'.': POP_AND_OUTPUT,
	'_': CHECK_HORIZONTAL,
	'+': PLUS,
	'-': MINUS,
	'*': MULTIPLY,
	'/': DEVIDE,
	':': DUPLICATE,
	'?': RANDOM_MOVE,
	'default': DEFAULT,
	/* eslint-enable quote-props */
} = befungeFunctions;

const stateEmpty: State = {
	move: {},
	posX: 0,
	posY: 0,
	stack: [],
};

const stateNotEmpty: State = {
	...stateEmpty,
	stack: [ 0, 1, 2, 3 ],
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

describe( '\'.\' POP_AND_OUTPUT', () => {
	test( 'Outputs 0 on empty stack', () => {
		expect( POP_AND_OUTPUT( stateEmpty ) )
			.toEqual( { newStack: [], output: '0' } as StateChange );
	} );
} );

describe( '\'.\' POP_AND_OUTPUT', () => {
	test( 'Pops and outputs last value from stack', () => {
		expect( POP_AND_OUTPUT( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, 2 ], output: '3' } as StateChange );
	} );
} );

describe( '\'_\' CHECK_HORIZONTAL', () => {
	test( 'Goes right if last value is 0', () => {
		expect( CHECK_HORIZONTAL( stateEmpty ) )
			.toEqual( { newStack: [], move: { x: 1 } } as StateChange );
	} );

	test( 'Goes left if last value is not 0', () => {
		expect( CHECK_HORIZONTAL( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, 2 ], move: { x: -1 } } as StateChange );
	} );
} );

describe( '\'+\' PLUS', () => {
	test( 'Pops last two values and pushes sum to stack', () => {
		expect( PLUS( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, 5 ] } as StateChange );
	} );
} );

describe( '\'-\' MINUS', () => {
	test( 'Pops last two values and pushes difference to stack', () => {
		expect( MINUS( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, -1 ] } as StateChange );
	} );
} );

describe( '\'*\' MULTIPLY', () => {
	test( 'Pops last two values and pushes product to stack', () => {
		expect( MULTIPLY( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, 6 ] } as StateChange );
	} );
} );

describe( '\'/\' DEVIDE', () => {
	test( 'Pops last two values and pushes dividend to stack', () => {
		expect( DEVIDE( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, 2 / 3 ] } as StateChange );
	} );
} );

describe( '\':\' DUPLICATE', () => {
	test( 'Duplicates the last value on the stack', () => {
		expect( DUPLICATE( stateNotEmpty ) )
			.toEqual( { newStack: [ 0, 1, 2, 3, 3 ] } as StateChange );
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
		const expectedMin = expected * 0.5;
		const expectedMax = expected * 1.5;

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


describe( '\'default\' DEFAULT', () => {
	test( 'Ends the programm', () => {
		expect( DEFAULT( stateNotEmpty ) )
			.toEqual( { isDone: true } as StateChange );
	} );
} );
