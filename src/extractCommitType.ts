export const isValidType = (input: string): input is string =>
	/^[\w-]+$/.test(input);

export const BreakingType = "break";

export interface ExtractCommitTypeProps {
	empty?: string;
	aliases?: Map<string, string>;
}

/**
 * Matches the header of a commit message such as `type: subject`,
 * `type(scope): subject`, `type!: subject` or `type(scope)!: subject`.
 */
const headerPattern = /^\s*([\w-]+)\s*(?:\(([^()]*)\))?\s*(!)?\s*:(.*)$/;
const breakingFooterPattern = /^BREAKING[ -]CHANGE\s*:/m;

export const extractCommitType = (
	commitMessage: string,
	props: ExtractCommitTypeProps = {},
): { type: string; body: string } => {
	const [line, ...rest] = commitMessage.split(/\r\n|\r|\n/);
	const matched = headerPattern.exec(line);
	if (matched) {
		const [, rawType, rawScope, bang, subject] = matched;
		const scope = rawScope?.trim();
		const body = scope ? `**${scope}:** ${subject.trim()}` : subject.trim();
		const breaking =
			Boolean(bang) || breakingFooterPattern.test(rest.join("\n"));
		const type = props.aliases?.get(rawType) || rawType;
		return { type: breaking ? BreakingType : type, body };
	}
	return {
		type: props.empty || "",
		body: line.trim(),
	};
};
