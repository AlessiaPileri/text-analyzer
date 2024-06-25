import { getContent } from "../file/file";
import { getSpaces, getWords, lettersInWords, getRepetitions } from "./calculations";

interface Statistics {
    wordsCount: number,
    lettersCount: number,
    spacesCount: number,
    repeatedWord: Array<string>,
}

export const calculate = (text: string): Statistics => {
    const words = getWords(text);
    const letters = lettersInWords(words);
    const spaces = getSpaces(text);
    const repeatedWord = getRepetitions(words).moreThan(10);

    return ({
        wordsCount: words.length,
        lettersCount: letters,
        spacesCount: spaces.length,
        repeatedWord,
    })
}