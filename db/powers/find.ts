
import { readJSON } from "fs-extra"


/*
export async function findPowers(id: string): Promise<Power[]> {
    const results: Power[] = []
  
    const powers = await readJSON("./db/Powers.json");


    for (const power of Object.values<any>(powers)){


        for (const p of Object.values<any>(power)){
        
            for (const pp of Object.values<any>(p)){
                if (id === pp.name) {

                    results.push({
                        name: pp.name,
                        activetime:  parseInt(pp.activetime),
                        cooldowntime:  parseInt(pp.cooldowntime),
                        radius:  parseInt(pp.radius),
                        requiredage:  parseInt(pp.requiredage)

                    })
                            
                }
            }
        }
                
    }   
    return results
}
*/

export async function findPowers(id: string, attribute: string): Promise<Array<string>> {
    const results: Array<string> = []
  
    const powers = await readJSON("./db/Powers.json");


    for (const power of Object.values<any>(powers)){
        
                if (id === power.name) {
                    if (attribute === "placement" && power.placement === "forcedAtTC") {
                            results.push(power[attribute])
                    }
                    else {
                        results.push(power[attribute])
                    }
                    
                            
                }
                
    }   
    return results
}