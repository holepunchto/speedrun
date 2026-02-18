import Runtime from 'pear-electron'
import Bridge from 'pear-bridge'
import process from 'bare-process'

const onDisk = Pear.app.key === null
if (onDisk) await import('./dev.js')

const bridge = new Bridge()
await bridge.ready()
//hello
const runtime = new Runtime()

const pipe = await runtime.start({ bridge })

pipe.on('end', () => Pear.exit())

export const isWindows = process.platform === 'win32'