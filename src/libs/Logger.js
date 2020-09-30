export const success = (msg) => {
  console.log("\x1b[1m\x1b[5m\x1b[42m\x1b[30m%s\x1b[0m", "SUCCESS:");
  console.log("\x1b[32m%s\x1b[0m", msg);
}//successLog

export const info = (msg) => {
  console.log("\x1b[1m\x1b[5m\x1b[46m\x1b[30m%s\x1b[0m", "INFO:");
  console.log("\x1b[36m%s\x1b[0m", msg);
}//infoLog

export const warning = (msg) => {
  console.log("\x1b[1m\x1b[5m\x1b[43m\x1b[30m%s\x1b[0m", "WARNING:");
  console.log("\x1b[33m%s\x1b[0m", msg);
}//warningLog

export const error = (msg) => {
  console.log("\x1b[1m\x1b[5m\x1b[41m\x1b[37m%s\x1b[0m", "ERROR:");
  console.log("\x1b[31m%s\x1b[0m", msg);
}//errorLog