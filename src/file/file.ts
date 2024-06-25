import { isUrl } from "../utils/string";
import { fromFs } from "./fromFs";
import { fromURL } from "./fromURL";
import { IFileGetter } from ".";

export const buildGetContent = (location: string) => (urlGetter: IFileGetter, fileGetter: IFileGetter) =>
    isUrl(location) ? urlGetter.getContent(location) : fileGetter.getContent(location)

export const getContent = (location: string) => buildGetContent(location)(fromURL, fromFs);

