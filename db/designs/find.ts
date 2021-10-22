
import { readJSON } from "fs-extra"


export async function findDesigns(id: string): Promise<Array<string>> {
    const results: Array<string> = []
  
    const designs = await readJSON("./src/assets/db/designs.json");


    for (const design of Object.values<any>(designs)){

        
        if (id === design.outputId) {
            results.push(design.outputName)
        }
    }   
    return results
}