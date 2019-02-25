import Stack from '../types/Stack';
import StackValue from '../types/StackValue';
import getLastStackValues from './getLastStackValues';

export default ( stack: Stack ): StackValue => getLastStackValues( stack, 1 )[ 0 ];
