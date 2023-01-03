import { Router } from "express";
import { readdirSync } from "fs";


// returns the path
const PATH_ROUTER = `${__dirname}`;
const router = Router();

/*
 cleanFileName:   
- index.ts ...
 to 
- index ...
*/

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

// returns how many files are in a directory
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Loading path: ${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
}); 

export { router };