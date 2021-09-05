export const isValidType = (
    input: string,
): input is string => (/^[\w-]+$/).test(input);

export interface ExtractCommitTypeProps {
    empty?: string,
    aliases?: Map<string, string>,
}

export const extractCommitType = (
    commitMessage: string,
    props: ExtractCommitTypeProps = {},
): {type: string, body: string} => {
    const [line] = commitMessage.split(/\r|\n/, 1);
    const colonIndex = line.indexOf(':');
    if (0 <= colonIndex) {
        const typePart = line.slice(0, colonIndex);
        const type = typePart.trim();
        if (isValidType(type)) {
            return {
                type: (props.aliases && props.aliases.get(type)) || type,
                body: line.slice(typePart.length + 1).trim(),
            };
        }
    }
    return {
        type: props.empty || '',
        body: line.trim(),
    };
};
