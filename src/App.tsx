Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@adamaslan 
agilgur5
/
react-signature-canvas
Public
forked from blackjk3/react-signature-pad
Code
Issues
4
Pull requests
1
Actions
Security
Insights
react-signature-canvas/example/src/index.js /
@agilgur5
agilgur5 deps: update peerDeps to support React 18 without warnings (#89)
…
Latest commit 64c7c49 on Jun 16
 History
 1 contributor
46 lines (38 sloc)  1.12 KB

import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

import SignaturePad from '../../src/index.tsx'

import * as styles from './styles.module.css'

class App extends Component {
  state = { trimmedDataURL: null }

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }

  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png')
    })
  }

  render () {
    const { trimmedDataURL } = this.state
    return <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad canvasProps={{ className: styles.sigPad }}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button className={styles.buttons} onClick={this.clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={this.trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img className={styles.sigImage} alt='signature'
          src={trimmedDataURL} />
        : null}
    </div>
  }
}

createRoot(document.getElementById('container')).render(<App />)

