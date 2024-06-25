
export interface IFileGetter {
    getContent(location: string | URL): Promise<string>;
}
