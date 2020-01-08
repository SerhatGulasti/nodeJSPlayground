const log = console.log
log('Starting')


setTimeout(() => {
    log("2 second timer")
}, 2000)

setTimeout(() => {
    log("0 second timer")
}, 0)


log('Stopping')