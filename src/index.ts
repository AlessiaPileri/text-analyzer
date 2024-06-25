import * as readline from 'node:readline';
import { getContent } from './file/file';
import { calculate } from './statistics';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Where is the file that you want to analyze? (URL or path accepted)`, async location => {
  try {
    const content = await getContent(location);
    const res = calculate(content);
    console.log(`
      Numero di parole: ${res.wordsCount},
      Numero di lettere: ${res.lettersCount},
      Numero di spazi: ${res.spacesCount},
      Parole ripetute: ${res.repeatedWord.length > 0 ? JSON.stringify(res.repeatedWord) : '-'}
      `);
    rl.close();
  } catch(err){
    console.error(`OPS! Si è verificato un errore: ${JSON.stringify(err, null, 4)}`);
    process.exit(1);
  }
});