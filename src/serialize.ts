export type Serializable =
	| ArrayLike<string>
	| Iterable<string>
	| Iterator<string>
	| string;

const isIterator = (
	input: Iterable<string> | Iterator<string>,
): input is Iterator<string> =>
	"next" in input && typeof input.next === "function";

export const serialize = function* (serializable: Serializable) {
	if (typeof serializable === "string") {
		yield serializable;
	} else if ("length" in serializable) {
		const { length } = serializable;
		for (let index = 0; index < length; index++) {
			yield serializable[index];
		}
	} else if (isIterator(serializable)) {
		while (true) {
			const result = serializable.next();
			if (result.done) {
				break;
			}
			yield result.value;
		}
	} else {
		for (const item of serializable) {
			yield item;
		}
	}
};
