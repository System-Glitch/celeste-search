
/*import { readJSON } from "fs-extra"*/
import { API } from "../download"

/*
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
*/

export async function findPowers(id: string, attribute: string): Promise<Array<string>> {
    const results: Array<string> = []
  
    const powers = await API.getPowersNuggets();

    
    for (const power of Object.values(powers)){
        
    /*console.log(power.name)*/

        if (id === power.name) {
            if (attribute === "placement.text" && power.placement !== null) {
                    results.push(power.placement.text)
            }
            else if (attribute === "createdUnits") {
                var totalUnitsCreated = ""
                for (let i = 0; i < power.createunit.length; i++) {
                    totalUnitsCreated = totalUnitsCreated + power.createunit[i].text
                }
                results.push(totalUnitsCreated)
            }
            else {
                results.push(power[attribute])
            }
                
                    
        }
                
    }
    return results
}