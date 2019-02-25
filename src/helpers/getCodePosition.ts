export default function <
Code extends ( any[] | string )[]
> (
	code: Code,
	{ posX, posY }: { posX: number, posY: number } ) {
	return code[ posY ][ posX ];
}
