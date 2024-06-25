import { IFileGetter } from ".";
import { readFile } from "node:fs";

export const fromFs: IFileGetter  = {
    getContent: function (location: string): Promise<string> {
        return new Promise((resolve, reject) => readFile(location, null, (err, data) => {
            if(err){
                reject(err);
            }
            resolve(data.toString())
            })
        )
    }
}