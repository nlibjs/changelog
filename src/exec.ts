import * as childProcess from "node:child_process";

export interface ExecResult {
	stdout: string;
	stderr: string;
}

export const exec = async (
	command: string,
	options: childProcess.ExecOptions = {},
): Promise<ExecResult> =>
	await new Promise<ExecResult>((resolve, reject) => {
		childProcess.exec(command, options, (error, stdout, stderr) => {
			if (error) {
				console.error(`--- stdout ---\n${stdout}`);
				console.error(`--- stderr ---\n${stderr}`);
				reject(error);
			} else {
				resolve({
					stdout: stdout.toString().trim(),
					stderr: stderr.toString().trim(),
				});
			}
		});
	});
