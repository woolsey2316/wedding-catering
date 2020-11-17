

import { SideNav } from '../components'

import {useEffect} from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    function unlockCSSTransitions() {
      var element = document.getElementById("root-page-elem");
      element.className = element.className.replace(/\preload\b/g, "");
    }

    unlockCSSTransitions()
  },[])
  
  return (
    <div id="root-page-elem" className="preload flex flex-col justify-center">
      <div className="flex">
        <div className="z-50 md:w-84">
          <SideNav/>
        </div>
        <div className="w-full md:w-body">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
