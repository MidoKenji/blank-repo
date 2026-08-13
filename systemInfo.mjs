//Referrence DOC: https://nodejs.org/api/os.html

/**
 * Relevant Stuff:
 * os.platform() - returns well the fucking platform
 * os.type() - i think this is just kernel
 * os.release() - os release/kernel version number
 * os.freemem()/ os.totalmem() both returns in bytes (which is what the )
 *
 */
import os from "os";
import { bytesToSize } from "./FreeMemory.mjs";

//lets make a function to call print the system info
//FIX: forgot tempo lit needs back ticks not single qoute
function printMySystemInfo() {
  const platform = os.platform();
  const kernelType = os.type().toLowerCase();
  const kernelRelease = os.release();
  const freeMemory = bytesToSize(os.freemem());
  const totalMemory = bytesToSize(os.totalmem());

  console.log("System Information Shit");
  console.log(`Operating Sys: ${platform}, ${kernelType}, ${kernelRelease}`);
  console.log(`Free Memory: ${freeMemory} `);
  console.log(`Total Memory: ${totalMemory}`);
}

//Second Way: I feel that the first method i was DRY so ill try an object method that makes the code reusable.
function getObjSystemInfo() {
  return {
    platform: os.platform(),
    kernType: os.type(),
    kernelRelease: os.release(),
    //how do i call the converter fuck me
    freeMemory: bytesToSize(os.freemem()),
    totalMemory: bytesToSize(os.totalmem()),
  };
}

/* This way fucking sucks to call it.
const meWantOSInfo = getObjSystemInfo();
console.log('System Information');
console.log(`Operating Sys: ${meWantOSInfo.platform}, ${meWantOSInfo.kernType}, ${meWantOSInfo.kernelRelease}`);
console.log(`Free Memory: ${meWantOSInfo.freeMemory}`);
console.log(`Total Memory: ${meWantOSInfo.totalMemory}`);
*/

/* Claude's Suggestion to call it */

const { platform, kernType, kernelRelease, freeMemory, totalMemory } =
  getObjSystemInfo();

console.log("System Information");
console.log(`Operating Sys: ${platform}, ${kernType}, ${kernelRelease}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);
