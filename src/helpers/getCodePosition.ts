export default function < Input > (
	code: Input[][],
	{ posX, posY }: { posX: number, posY: number },
) {
	return code[ posY ][ posX ];
}
