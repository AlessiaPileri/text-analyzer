import { countWords, getRepetitions, getSpaces, getWords } from "../calculations";

describe('file statistics', () => {
    describe('getWords', () => {
        it('should remove special characters', () => {
            let text = 'word1, word2?';
            expect(getWords(text)).toStrictEqual(['word1', 'word2']);
            text = '?!chars';
            expect(getWords(text)).toStrictEqual(['chars'])
        })

        it('should not consider spaces', () => {
            const text = 'text with a lot of            spaces';
            const words = getWords(text);
            expect(words.length).toBe(6);
            expect(words).toStrictEqual(['text', 'with', 'a', 'lot', 'of', 'spaces'])
        })

        it('should not consider newline char', () => {
            const text = 'text \
            with newline \
            char';
            const words = getWords(text);
            expect(words).toStrictEqual([ 'text', 'with', 'newline', 'char' ]);
            expect(words.length).toBe(4);
        })
    });

    describe('getSpaces', () => {
        it('should get spaces between words', () => {
            let text = 'text with a lot of            spaces';
            const spaces = getSpaces(text);
             expect(spaces.length).toBe(16);
            text = 'word spaced';
            expect(getSpaces(text).length).toBe(1);
        })
    })

    describe('countWords', () => {
        it('should return word statistics', () => {
            let text = ['word', 'with', 'no', 'repetition'];
            expect(countWords(text)).toStrictEqual(new Map<string, number>([['word', 1], ['with', 1], ['no', 1], ['repetition', 1]]))
            text = ['word', 'word', 'repetition'];
            expect(countWords(text)).toStrictEqual(new Map<string, number>([['word', 2], ['repetition', 1]]))
        })
    })

    describe('getRepetitions', () => {
        describe('more than', () => {
            it('should return word repeated more than limit', () => {
                let text = ['word', 'word', 'repetition'];
                expect(getRepetitions(text).moreThan(1)).toStrictEqual(['word'])
                text = ['word', 'word', 'word', 'repetition', 'repetition', 'test'];
                expect(getRepetitions(text).moreThan(2)).toStrictEqual(['word']);
                expect(getRepetitions(text).moreThan(1)).toStrictEqual(['word', 'repetition']);
                expect(getRepetitions(text).moreThan(3)).toStrictEqual([])
            })
        })
    })
})