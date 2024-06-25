const specialCharRegex = new RegExp(/\.|\,|\;|\:|\!|\"|\£|\$|\%|\&|\/|\(|\)|\=|\?/g);

export const getWords = (text: string) => text
    .replaceAll(specialCharRegex, '')   //remove special characters
    .split(/\n/g)                       //divide into lines
    .flatMap(s => s.split(' '))         //divide into words
    .filter(w => w.length > 0);         //get only reals words

export const lettersInWord = (word: string) => word.length;

export const lettersInWords = (words: Array<string>) => words.reduce((letters, word) => letters + lettersInWord(word), 0);

export const getSpaces = (text: string) => text.replaceAll(specialCharRegex, '').split('').filter(c => c === ' ');

export const countWords = (words: Array<string>) => {
    const wordCount = new Map<string, number>();
    words.forEach(w => {
        const reps = wordCount.get(w)
        wordCount.set(w, reps ? reps + 1 : 1)
    })
    return wordCount;
}

export const getRepetitions = (text: Array<string>) => {
    const wordsInText = countWords(text);
    return ({
        moreThan: (limit: number) => [...wordsInText.entries()].filter(rep => rep[1] > limit).map(c => c[0]),
    })
}