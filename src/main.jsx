import React from 'react'
import { createRoot } from 'react-dom/client'
import updates from 'pear-updates'

const REGULATE = 500
const WAIT = 100

updates({ app: true, version: { key: null } }, (update) => {
  console.log('Update', update)
  if (Date.now() < Number(window.name)) return
  window.name = Date.now() + REGULATE
  setTimeout(() => location.reload(), WAIT)
})

updates((update) => {
  console.log('Update', update)
  const onDisk = update.version.key === null
  if (onDisk) return
  document.body.innerHTML = '<h1>Update, restarting in 5s<h1>'
  setTimeout(() => Pear.restart(), 5000)
})

const bar = {
  WebkitAppRegion: 'drag',
  position: 'fixed',
  zIndex: 2,
  height: '1.2em',
  width: '100%'
}

function App () {
  return (<div>
    <div style={bar}>
      <pear-ctrl></pear-ctrl>
    </div>
    <h1 style={{paddingTop: '.75em', paddingLeft: '.35em'}}>Hello Pear Peer!</h1>
  </div>)
}

createRoot(document.getElementById('root')).render(<App />)
