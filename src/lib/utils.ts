export type NumberGrid = boolean[][];

const Grid1: NumberGrid = [
	[false, true, false],
	[false, true, false],
	[false, true, false],
	[false, true, false],
	[false, true, false]
];

const Grid2: NumberGrid = [
	[true, true, true],
	[false, false, true],
	[true, true, true],
	[true, false, false],
	[true, true, true]
];

const Grid3: NumberGrid = [
	[true, true, true],
	[false, false, true],
	[true, true, true],
	[false, false, true],
	[true, true, true]
];

const Grid4: NumberGrid = [
	[true, false, true],
	[true, false, true],
	[true, true, true],
	[false, false, true],
	[false, false, true]
];

const Grid5: NumberGrid = [
	[true, true, true],
	[true, false, false],
	[true, true, true],
	[false, false, true],
	[true, true, true]
];

const Grid6: NumberGrid = [
	[true, false, false],
	[true, false, false],
	[true, true, true],
	[true, false, true],
	[true, true, true]
];

const Grid7: NumberGrid = [
	[true, true, true],
	[false, false, true],
	[false, false, true],
	[false, false, true],
	[false, false, true]
];

const Grid8: NumberGrid = [
	[true, true, true],
	[true, false, true],
	[true, true, true],
	[true, false, true],
	[true, true, true]
];

const Grid9: NumberGrid = [
	[true, true, true],
	[true, false, true],
	[true, true, true],
	[false, false, true],
	[false, false, true]
];

const Grid0: NumberGrid = [
	[true, true, true],
	[true, false, true],
	[true, false, true],
	[true, false, true],
	[true, true, true]
];

export const ColonGrid: NumberGrid = [
	[false, false, false],
	[false, true, false],
	[false, false, false],
	[false, true, false],
	[false, false, false]
];

export const GridM: NumberGrid = [
	[true, false, true],
	[true, true, true],
	[true, true, true],
	[true, false, true],
	[true, false, true]
];

export const GridS = Grid5;
export const GridO = Grid0;

export const GridH: NumberGrid = [
	[true, false, true],
	[true, false, true],
	[true, true, true],
	[true, false, true],
	[true, false, true]
];

export const GridT: NumberGrid = [
	[true, true, true],
	[false, true, false],
	[false, true, false],
	[false, true, false],
	[false, true, false]
];

export const GridC: NumberGrid = [
	[true, true, true],
	[true, false, false],
	[true, false, false],
	[true, false, false],
	[true, true, true]
];

export const GridL: NumberGrid = [
	[true, false, false],
	[true, false, false],
	[true, false, false],
	[true, false, false],
	[true, true, true]
];

export const GridK: NumberGrid = [
	[true, false, true],
	[true, true, false],
	[true, true, false],
	[true, true, false],
	[true, false, true]
];

export function getGrid(number: number): NumberGrid {
	switch (number) {
		case 0:
			return Grid0;
		case 1:
			return Grid1;
		case 2:
			return Grid2;
		case 3:
			return Grid3;
		case 4:
			return Grid4;
		case 5:
			return Grid5;
		case 6:
			return Grid6;
		case 7:
			return Grid7;
		case 8:
			return Grid8;
		case 9:
			return Grid9;
		default:
			return Grid0;
	}
}

export function parseMultiDigitNumber(number: number | string): NumberGrid[] {
	const numberString = number.toString();
	const numberArray = numberString.split('');
	const numberGrids = numberArray.map((n) => getGrid(parseInt(n)));
	return numberGrids;
}
