export const parseUnquotedCSVLine = function* (
  input: string,
): Generator<string> {
  const { length } = input;
  let offset = 0;
  while (offset < length) {
    let nextOffset = input.indexOf(',', offset);
    if (nextOffset < 0) {
      nextOffset = length;
    }
    yield input.slice(offset, nextOffset).trim();
    offset = nextOffset + 1;
  }
};
