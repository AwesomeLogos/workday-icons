import { promises as fsPromises } from 'fs';

import * as accentIcons from '@workday/canvas-accent-icons-web';
import * as appletIcons from '@workday/canvas-applet-icons-web';
import * as systemIcons from '@workday/canvas-system-icons-web';

async function writeFiles(subdirectory:string, objs: [ string, any ][]): Promise<void> {

  for (const [ key, value ] of objs) {
    if ('svg' in value) {
      const fileName = `docs/images/${subdirectory}/${key}.svg`;
      await fsPromises.writeFile(fileName, value.svg);
    } else {
      console.log(`INFO: skipping ${key}`);
    }
  }
}

async function main() {

  writeFiles('accent', Object.entries(accentIcons));
  writeFiles('applet', Object.entries(appletIcons));
  writeFiles('system', Object.entries(systemIcons));

}

main();