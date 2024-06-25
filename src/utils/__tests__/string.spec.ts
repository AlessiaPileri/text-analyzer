import { isUrl } from "../string"

describe('string utils', () => {
    describe('isUrl', () => {
        test.each([
            { str: 'test', result: false },
            { str: '/path/to/file', result: false },
            { str: 'http://example.com', result: true },
            { str: 'http://example.com/file.doc', result: true },
        ])(`$str is $result URL`, ({str, result}) => {
            expect(isUrl(str)).toBe(result);
        })
    })
})