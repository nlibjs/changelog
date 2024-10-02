import { parseUnquotedCSVLine } from "./parseUnquotedCSVLine.js";

export interface RefNames {
	tag: Array<string>;
	reference: Array<string>;
}

export const parseRefNames = (input: string): RefNames => {
	const tag: Array<string> = [];
	const reference: Array<string> = [];
	for (const item of parseUnquotedCSVLine(input)) {
		if (item.startsWith("tag:")) {
			tag.push(item.slice(4).trim());
		} else {
			reference.push(item);
		}
	}
	return {
		tag,
		reference,
	};
};
