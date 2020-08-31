import {parseUnquotedCSVLine} from './parseUnquotedCSVLine';

export interface RefNames {
    tag: Array<string>,
}

export const parseRefNames = (
    input: string,
): RefNames => {
    const tag: Array<string> = [];
    for (const item of parseUnquotedCSVLine(input)) {
        if (item.startsWith('tag:')) {
            tag.push(item.slice(4).trim());
        }
    }
    return {tag};
};
