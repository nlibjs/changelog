/* eslint-disable no-console */
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import { isObject } from '@nlib/typing';

export const getNodePackageVersion = async (): Promise<string | null> => {
  const jsonFilePath = new URL(
    'package.json',
    pathToFileURL(`${process.cwd()}${path.sep}`),
  );
  const stats = await fs.stat(jsonFilePath).catch(() => null);
  if (stats && stats.isFile()) {
    console.info('package.json found');
    const json: unknown = JSON.parse(await fs.readFile(jsonFilePath, 'utf8'));
    if (isObject(json) && typeof json.version === 'string') {
      console.info(`version: ${json.version}`);
      return json.version;
    }
    console.info('package.json found but version is not found');
  }
  return null;
};
