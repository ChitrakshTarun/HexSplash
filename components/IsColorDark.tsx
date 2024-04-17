/* 
FUNCTION: Identify if color is light or dark.
(Copilot clutched out on this code. Function finds the luma of the color and returns if it is < 128. Using this to determine whether the text above the color should be white or black.)
*/
export const isColorDark = (color: string): boolean => {
	const c = color.substring(1);
	const rgb = parseInt(c, 16);
	const r = (rgb >> 16) & 0xff;
	const g = (rgb >> 8) & 0xff;
	const b = (rgb >> 0) & 0xff;
	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return luma < 128;
};
