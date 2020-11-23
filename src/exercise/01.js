// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 💣 remove this import
// import Globe from '../globe'

// 🐨 use React.lazy to create a Globe component which using a dynamic import
// to get the Globe component from the '../globe' module.
// import('../globe').then(
//   moduleExports => {
//     moduleExports.Globe()
//   },
//   error => {
//     console.error('there was an error loading the script')
//     throw error
//   }
// )

const Globe = React.lazy(() => import('../globe'))

// *extension1*
function loadGlobe() {
  import('../globe')
}

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  // 🐨 wrap the code below in a <React.Suspense /> component
  // with a fallback.
  return (
    <div onMouseEnter={loadGlobe} onFocus={loadGlobe}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <React.Suspense fallback={<div>loading..</div>}>
        <label style={{ marginBottom: '1rem' }}>
          <input
            type="checkbox"
            checked={showGlobe}
            onChange={e => setShowGlobe(e.target.checked)}
            onMouseOver={e => setShowGlobe(e.target.checked)}
          />
          {' show globe'}
        </label>
        <div style={{ width: 400, height: 400 }}>
          {showGlobe ? <Globe /> : null}
        </div>
      </React.Suspense>
    </div>
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
