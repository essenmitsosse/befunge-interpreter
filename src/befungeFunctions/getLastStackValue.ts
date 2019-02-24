import Stack from '../types/Stack';

export default ( stack: Stack ) => ( stack.length === 0 ? 0 : stack.slice( -1 )[ 0 ] );
