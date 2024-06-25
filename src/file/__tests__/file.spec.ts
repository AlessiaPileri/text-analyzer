import { IFileGetter } from "..";
import { buildGetContent } from "../file";

describe('get content from file', () => {
    test('should get file from right origin', async () => {
        const fromUrl: IFileGetter = {
            getContent: jest.fn()
        };
        const fromFs: IFileGetter = {
            getContent: jest.fn()
        }
        await buildGetContent('/path/')(fromUrl, fromFs)
        expect(fromFs.getContent).toHaveBeenCalledWith('/path/');
        expect(fromUrl.getContent).not.toHaveBeenCalled();
        jest.resetAllMocks();
        await buildGetContent('https://example.com')(fromUrl, fromFs)
        expect(fromUrl.getContent).toHaveBeenCalledWith('https://example.com');
        expect(fromFs.getContent).not.toHaveBeenCalled();
    })
})