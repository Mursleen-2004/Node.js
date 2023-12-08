const os = require('os');

console.log("userInfo:"+os.userInfo())
console.log("Hostname:"+os.hostname())
console.log("Uptime:"+os.uptime())
console.log("Version:"+ os.version());
console.log("Type:"+os.type());
console.log("TotalMemory:" + os.totalmem())
console.log("Release:" + os.release())
console.log("Platform:" + os.platform())
console.log("Machine :"+ os.machine())
console.log("FreeMemory:"+ os.freemem())
console.log("HostName:"+ os.hostname());