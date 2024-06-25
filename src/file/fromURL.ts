import { IFileGetter } from ".";

export const fromURL: IFileGetter  = {
    getContent: async function (location: URL): Promise<string> {
        const response = await fetch(location);
        return response.text();
    }
}