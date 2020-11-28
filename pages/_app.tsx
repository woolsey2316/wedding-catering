import '../styles/globals.css'
import '../styles/tailwind.css'

import { useEffect } from 'react'
import { SideNav } from '../components'

import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const removeFouc = (foucElement) => {
      foucElement.className = foucElement.className.replace('no-fouc', 'fouc')
    }
    removeFouc(document.documentElement)

  })
  return (
    <div id="root-page-elem" className="flex flex-col justify-center">
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
