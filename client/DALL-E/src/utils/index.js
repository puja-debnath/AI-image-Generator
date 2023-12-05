 import surpriseMePrompts  from "../constants"

 export function getRandomPromt(prompts){
     const promtIndex= Math.floor(Math.random() * surpriseMePrompts.length)
     const randomPromt = surpriseMePrompts[promtIndex]

     if(randomPromt === prompts) return getRandomPromt(prompts)
     return getRandomPromt;
 }