import '../styles/globals.css'
import '../styles/tailwind.css'

import { SideNav } from '../components'

import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    function unlockCSSTransitions() {
      var element = document.getElementById("root");
      element.className = element.className.replace(/\preload\b/g, "");
    }

    unlockCSSTransitions()
  })

  return (
    <div id="root" className="preload flex flex-col justify-center">
      <div className="flex">
        <div className="z-50 md:w-84">
          {/* <SideNav/> */}
        </div>
        <div className="w-full md:w-body">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
