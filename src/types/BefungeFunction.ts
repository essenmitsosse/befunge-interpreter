import State from './State';
import StateChange from './StateChange';

type BefungeFunction = ( ( state: State ) => StateChange );

export default BefungeFunction;
