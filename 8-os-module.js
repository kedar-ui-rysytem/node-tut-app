const os = require('os');
// Users info
const user = os.userInfo();
console.log(user);

// method return the system uptime in seconds

console.log(` The system uptime is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMom: os.freemem(),

}

console.log(currentOs);