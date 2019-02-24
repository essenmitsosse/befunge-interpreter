import State from '../types/State';

export default ( { code, posX, posY }: Pick<State, 'code' | 'posX' | 'posY'> ) => code[ posY ][ posX ];
