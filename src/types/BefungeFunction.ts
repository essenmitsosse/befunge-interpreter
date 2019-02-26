import State from './State';
import StateChange from './StateChange';
import BefungeCodeRaw from './BefungeCodeRaw';

type BefungeFunction = ( ( state: State, codeRaw: BefungeCodeRaw ) => StateChange );

export default BefungeFunction;
