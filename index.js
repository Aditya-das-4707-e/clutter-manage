import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "/home/adi/Desktop/backend-development/exercise-time" //provide your current path in there. where you run this code... 

let files = await fs.readdir(basepath);

for (const items of files) {
    let ext = items.split(".")[items.split(".").length - 1]
    console.log(ext);
    if(ext != "js" && ext != "json" && items.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            //move the file to this directory if it not js or json file
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        } else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }
    }
}

//if at first some file not move in folder then you run this code again then problem is slove... 
//you just randomly provide you file in this current directory path and this code will arrange this file current extaintion. 