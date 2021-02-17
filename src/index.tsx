import 'preact/debug'
import { h, render } from 'preact'
import 'regenerator-runtime/runtime'

import App from './App'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.querySelector('#app')!)
