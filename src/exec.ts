import * as childProcess from 'child_process';
import {Promise} from '@nlib/global';

export interface ExecResult {
    stdout: string,
    stderr: string,
}

export const exec = async (
    command: string,
): Promise<ExecResult> => await new Promise<ExecResult>((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        } else {
            resolve({stdout, stderr});
        }
    });
});
