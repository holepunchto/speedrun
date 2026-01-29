import Runtime from 'pear-electron'
import Bridge from 'pear-bridge'

const onDisk = Pear.app.key === null
if (onDisk) await import('./dev.js')

const bridge = new Bridge()
await bridge.ready()
//hello
const runtime = new Runtime()

const pipe = await runtime.start({ bridge })

pipe.on('end', () => Pear.exit())
