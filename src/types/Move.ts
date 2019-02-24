type Move =
{
	x?: undefined,
	y?: undefined
}
| { // horizontal movement
	x: 1 | -1,
	y?: undefined,
}
| { // vertical movement
	x?: undefined,
	y: 1 | -1,
}

export default Move;
