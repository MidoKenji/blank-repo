//Referrence DOC: https://nodejs.org/api/os.html

/**
 * Relevant Stuff:
 * os.platform() - returns well the fucking platform
 * os.type() - i think this is just kernel
 * os.release() - os release/kernel version number
 * os.freemem()/ os.totalmem() both returns in bytes (which is what the )
 * 
 */
import os from 'os';
import { bytesToSize } from '../FreeMemeory';


//lets make a function to call print the system info
function printMySystemInfo(){
    const platform = os.platform();
    const kernelType = os.type().toLowerCase();
    const kernelRelease = os.release();
    const freeMemory = bytesToSize(os.freemem());
    const totalMemory = bytesToSize(os.totalmem());

    console.log('System Information Shit');
    console.log('Operating Sys: ${platform}, ${kernelType}, ${kernelRelease}');
    console.log('Free Memory: ${freeMemory} ');
    console.log('Total Memory: ${totalMemory}');
}

printMySystemInfo();