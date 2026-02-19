import updates from 'pear-updates'
import { spawn } from 'bare-subprocess'
import { isWindows } from '.'

isWindows ? spawn('npm.cmd', ['run', 'build'], { stdio: 'inherit' }) : spawn('npm', ['run', 'build'], { stdio: 'inherit' })
const REGULATE = 500
let throttle = Date.now() + REGULATE
updates({ app: true, version: { key: null } }, (update) => {
  if (Date.now() < throttle) return
  throttle = Infinity
  console.log('Update', update)
  const build = isWindows ? spawn('npm.cmd', ['run', 'build'], { stdio: 'inherit' }) : spawn('npm', ['run', 'build'], { stdio: 'inherit' })
  build.on('close', () => {
    throttle = Date.now() + REGULATE
  })
})